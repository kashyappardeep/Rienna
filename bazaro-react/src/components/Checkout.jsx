import { useEffect, useMemo, useRef, useState } from 'react'
import { isApiConfigured } from '../services/apiClient'
import {
  checkUsdtIntentStatus,
  createInrPaymentOrder,
  createUsdtIntent,
  placeOrder,
  verifyInrPayment,
} from '../services/checkoutService'

const DASHBOARD_STORAGE_KEY = 'rienna_dashboard_v1'

const readDashboardState = () => {
  try {
    const raw = window.localStorage.getItem(DASHBOARD_STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw)
  } catch {
    return null
  }
}

const writeDashboardState = (state) => {
  try {
    window.localStorage.setItem(DASHBOARD_STORAGE_KEY, JSON.stringify(state))
  } catch {
    // ignore
  }
}

const addOrderToDashboard = (order) => {
  const state = readDashboardState() || {}
  state.orders = Array.isArray(state.orders) ? state.orders : []
  state.orders.unshift(order)
  writeDashboardState(state)
}

const deductEarningsFromDashboard = (amount) => {
  const state = readDashboardState() || {}
  if (typeof state.earningsBalance !== 'number') state.earningsBalance = 0
  if (typeof state.spentFromEarnings !== 'number') state.spentFromEarnings = 0
  state.earningsBalance = state.earningsBalance - amount
  state.spentFromEarnings = state.spentFromEarnings + amount
  writeDashboardState(state)
}

const getEarningsBalance = () => {
  const state = readDashboardState()
  return state && typeof state.earningsBalance === 'number' ? state.earningsBalance : 0
}

const formatTime = (totalSeconds) => {
  const m = Math.floor(totalSeconds / 60)
  const s = totalSeconds % 60
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

const Checkout = () => {
  // Keeping these aligned with the existing checkout.html payment logic.
  const subtotalUSD = 74.0
  const upiId = 'rienna@upi'
  const usdToInr = 83.0

  const [paymentVisible, setPaymentVisible] = useState(false)
  const [selectedMode, setSelectedMode] = useState(null) // 'INR' | 'USDT' | 'ANB' | 'EARNINGS'
  const [showReturnLogin, setShowReturnLogin] = useState(false)
  const [showCouponForm, setShowCouponForm] = useState(false)
  const [paymentReference, setPaymentReference] = useState(null)
  const [usdtIntent, setUsdtIntent] = useState(null)
  const [hasMarkedUsdtPaid, setHasMarkedUsdtPaid] = useState(false)
  const [usdtPaymentVerified, setUsdtPaymentVerified] = useState(false)
  const [usdtStatusText, setUsdtStatusText] = useState('')
  const [isConfirming, setIsConfirming] = useState(false)

  const [timerText, setTimerText] = useState('05:00')
  const timerEndsAtRef = useRef(null)
  const timerIntervalRef = useRef(null)

  const paymentSectionRef = useRef(null)

  const getBillingDetails = () => {
    const fullName = String(document.getElementById('checkoutFullName')?.value || '').trim()
    const mobile = String(document.getElementById('checkoutMobile')?.value || '').trim()
    const pincode = String(document.getElementById('checkoutPincode')?.value || '').trim()
    const address = String(document.getElementById('checkoutAddress')?.value || '').trim()
    const email = String(document.getElementById('checkoutEmail')?.value || '').trim()
    return { fullName, mobile, pincode, address, email }
  }

  const handleReturnCustomerLogin = (event) => {
    event.preventDefault()
    const email = String(event.currentTarget.querySelector('input[type="text"]')?.value || '').trim()
    const password = String(event.currentTarget.querySelector('input[type="password"]')?.value || '').trim()
    if (!email || !password) {
      alert('Please enter email and password.')
      return
    }
    alert('Login details captured. You can continue checkout.')
  }

  const handleCouponSubmit = (event) => {
    event.preventDefault()
    const coupon = String(event.currentTarget.querySelector('input[type="text"]')?.value || '').trim()
    if (!coupon) {
      alert('Please enter a coupon code.')
      return
    }
    if (coupon.toUpperCase() === 'RIENNA10') {
      alert('Coupon accepted (demo). Discount will be applied from backend pricing.')
      return
    }
    alert('Invalid coupon code.')
  }

  const clearTimer = () => {
    if (timerIntervalRef.current) window.clearInterval(timerIntervalRef.current)
    timerIntervalRef.current = null
    timerEndsAtRef.current = null
  }

  const setTimer = (seconds) => {
    clearTimer()
    timerEndsAtRef.current = Date.now() + seconds * 1000

    const tick = () => {
      const left = Math.max(0, Math.ceil((timerEndsAtRef.current - Date.now()) / 1000))
      setTimerText(formatTime(left))
      if (left <= 0) {
        if (timerIntervalRef.current) window.clearInterval(timerIntervalRef.current)
        timerIntervalRef.current = null
      }
    }

    tick()
    timerIntervalRef.current = window.setInterval(tick, 250)
  }

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      clearTimer()
      document.body.removeChild(script)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const earningsBalance = useMemo(() => getEarningsBalance(), [paymentVisible, selectedMode])
  const inrAmount = useMemo(() => Math.round(subtotalUSD * usdToInr), [subtotalUSD, usdToInr])

  const usdtNetwork = String(import.meta.env.VITE_USDT_TESTNET_NETWORK || 'BSC-TESTNET').trim()
  const fallbackUsdtAddress = String(
    import.meta.env.VITE_USDT_TESTNET_ADDRESS || '0x1111111111111111111111111111111111111111'
  ).trim()
  const cryptoAddress = useMemo(() => usdtIntent?.address || fallbackUsdtAddress, [usdtIntent, fallbackUsdtAddress])
  const usdtAmount = useMemo(() => usdtIntent?.amount_usdt || subtotalUSD, [usdtIntent, subtotalUSD])
  const usdtQrData = useMemo(
    () =>
      `USDT (${usdtNetwork})\nAddress: ${cryptoAddress}\nAmount: ${usdtAmount} USDT\nNote: Pay before timer ends.`,
    [usdtNetwork, cryptoAddress, usdtAmount]
  )
  const usdtQrImage = useMemo(
    () => `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(usdtQrData)}`,
    [usdtQrData]
  )

  const upiPayLink = useMemo(() => {
    return (
      'upi://pay?pa=' +
      encodeURIComponent(upiId) +
      '&pn=' +
      encodeURIComponent('Rienna') +
      '&am=' +
      encodeURIComponent(String(inrAmount)) +
      '&cu=' +
      encodeURIComponent('INR')
    )
  }, [upiId, inrAmount])

  const timerExpired = useMemo(() => {
    if (!timerEndsAtRef.current) return false
    return Date.now() > timerEndsAtRef.current
  }, [timerText])

  const earningsSufficient = earningsBalance >= subtotalUSD

  const confirmDisabled = useMemo(() => {
    if (!selectedMode) return true
    if (selectedMode === 'EARNINGS') return !earningsSufficient
    if (selectedMode === 'USDT' || selectedMode === 'ANB') return timerExpired || !hasMarkedUsdtPaid || !usdtPaymentVerified
    return false
  }, [selectedMode, earningsSufficient, timerExpired, hasMarkedUsdtPaid, usdtPaymentVerified])

  const handleContinueToPayment = () => {
    const { fullName, mobile, pincode, address } = getBillingDetails()

    if (!fullName || !mobile || !pincode || !address) {
      alert('Please fill Full Name, Mobile Number, Pincode and Full Address before placing the order.')
      return
    }

    setPaymentVisible(true)
    window.setTimeout(() => paymentSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50)
  }

  const createUsdtPaymentIntent = async () => {
    if (!isApiConfigured()) {
      setUsdtIntent({
        intent_id: `local_usdt_${Date.now()}`,
        network: usdtNetwork,
        address: fallbackUsdtAddress,
        amount_usdt: subtotalUSD,
      })
      return
    }

    const payload = await createUsdtIntent({
      usd_amount: subtotalUSD,
      network: usdtNetwork,
    })
    setUsdtIntent(payload)
  }

  const setMode = async (mode) => {
    setSelectedMode(mode)
    clearTimer()
    setTimerText('05:00')
    setPaymentReference(null)
    setHasMarkedUsdtPaid(false)
    setUsdtPaymentVerified(false)
    setUsdtStatusText('')

    if (mode === 'USDT' || mode === 'ANB') {
      setTimer(5 * 60)
      try {
        await createUsdtPaymentIntent()
      } catch (error) {
        alert(error?.message || 'Unable to initialize USDT payment. Please try again.')
      }
    }
  }

  const checkUsdtPaymentNow = async () => {
    if (!usdtIntent?.intent_id) return
    if (!isApiConfigured()) {
      setUsdtPaymentVerified(true)
      setUsdtStatusText('Payment marked in local mode.')
      return
    }

    try {
      const result = await checkUsdtIntentStatus({ intent_id: usdtIntent.intent_id })
      if (result?.verified) {
        setUsdtPaymentVerified(true)
        setUsdtStatusText(`Payment detected${result?.tx_hash ? ` (${result.tx_hash.slice(0, 10)}...)` : ''}.`)
        return
      }
      setUsdtPaymentVerified(false)
      setUsdtStatusText('Payment not detected yet. Try again after network confirmation.')
    } catch (error) {
      if (isFetchConnectivityError(error)) {
        setUsdtStatusText('Unable to reach payment checker. Please retry.')
        return
      }
      setUsdtStatusText(error?.message || 'Unable to verify payment right now.')
    }
  }

  useEffect(() => {
    if (!(selectedMode === 'USDT' || selectedMode === 'ANB')) return
    if (!hasMarkedUsdtPaid || usdtPaymentVerified || timerExpired) return

    const id = window.setInterval(() => {
      checkUsdtPaymentNow()
    }, 8000)

    return () => window.clearInterval(id)
  }, [selectedMode, hasMarkedUsdtPaid, usdtPaymentVerified, timerExpired, usdtIntent])

  const openRazorpayCheckout = (gatewayOrder, billingDetails) =>
    new Promise((resolve, reject) => {
      if (!window.Razorpay) {
        reject(new Error('Razorpay SDK not loaded. Please refresh and try again.'))
        return
      }

      const options = {
        key: gatewayOrder.key,
        amount: gatewayOrder.order.amount,
        currency: gatewayOrder.order.currency,
        name: 'Rienna',
        description: 'Checkout payment',
        order_id: gatewayOrder.order.id,
        prefill: {
          name: billingDetails.fullName,
          contact: billingDetails.mobile,
          email: billingDetails.email || '',
        },
        notes: {
          source: 'bazaro-react-checkout',
        },
        handler: (response) => resolve(response),
        modal: {
          ondismiss: () => reject(new Error('Payment popup closed before completion.')),
        },
      }

      const razorpay = new window.Razorpay(options)
      razorpay.open()
    })

  const handleCopyCryptoAddress = async () => {
    try {
      await navigator.clipboard.writeText(cryptoAddress)
      alert('Address copied.')
    } catch {
      alert('Copy failed. Please copy manually.')
    }
  }

  const handleRestartTimer = () => {
    if (selectedMode === 'USDT' || selectedMode === 'ANB') {
      setTimer(5 * 60)
    }
  }

  const isFetchConnectivityError = (error) => {
    const message = String(error?.message || '').toLowerCase()
    return message.includes('failed to fetch') || message.includes('networkerror')
  }

  const handleConfirmOrder = async () => {
    if (!selectedMode) {
      alert('Please select a payment mode.')
      return
    }

    if ((selectedMode === 'USDT' || selectedMode === 'ANB') && timerEndsAtRef.current && Date.now() > timerEndsAtRef.current) {
      alert('Payment timer expired. Please restart the timer and complete payment.')
      return
    }
    if ((selectedMode === 'USDT' || selectedMode === 'ANB') && !usdtPaymentVerified) {
      alert('Payment not verified yet. Please click "Check Payment Status" and try again.')
      return
    }

    if (selectedMode === 'EARNINGS') {
      const bal = getEarningsBalance()
      if (bal < subtotalUSD) {
        alert('Insufficient earnings balance. Please choose INR/USDT/ANB.')
        return
      }
      deductEarningsFromDashboard(subtotalUSD)
    }

    const order = {
      id: `#RIN-${Math.floor(1000 + Math.random() * 9000)}`,
      date: new Date().toISOString().slice(0, 10),
      items: 3,
      amount: subtotalUSD,
      status: selectedMode === 'EARNINGS' ? 'Paid (Earnings)' : `Paid (${selectedMode})`,
    }

    const billingDetails = getBillingDetails()
    if (!billingDetails.fullName || !billingDetails.mobile || !billingDetails.pincode || !billingDetails.address) {
      alert('Please complete billing details before confirming order.')
      return
    }

    setIsConfirming(true)
    try {
      let latestPaymentReference = paymentReference

      if (selectedMode === 'INR') {
        if (!isApiConfigured()) {
          throw new Error('INR gateway requires API backend configuration.')
        }
        const gatewayOrder = await createInrPaymentOrder({
          amount: inrAmount,
          currency: 'INR',
          receipt: order.id,
        })
        const razorpayResult = await openRazorpayCheckout(gatewayOrder, billingDetails)
        await verifyInrPayment({
          razorpay_order_id: razorpayResult.razorpay_order_id,
          razorpay_payment_id: razorpayResult.razorpay_payment_id,
          razorpay_signature: razorpayResult.razorpay_signature,
        })
        latestPaymentReference = razorpayResult.razorpay_payment_id
        setPaymentReference(latestPaymentReference)
      }

      if (selectedMode === 'USDT' || selectedMode === 'ANB') {
        if (!usdtIntent?.intent_id) {
          throw new Error('USDT intent missing. Please re-select payment mode.')
        }
        latestPaymentReference = usdtIntent.intent_id
        setPaymentReference(latestPaymentReference)
      }

      if (isApiConfigured()) {
        try {
          await placeOrder({
            billingDetails,
            paymentMode: selectedMode,
            totals: {
              subtotal: subtotalUSD,
              total: subtotalUSD,
              currency: 'USD',
            },
            items: [
              { name: 'Day Cream SPF 30', quantity: 1, price: 24 },
              { name: 'Under Eye Roll On Gel', quantity: 1, price: 18 },
              { name: 'Vitamin C Glutathione Serum', quantity: 1, price: 32 },
            ],
            orderRef: order.id,
            paymentReference: latestPaymentReference,
          })
        } catch (error) {
          const canFallbackLocally = (selectedMode === 'USDT' || selectedMode === 'ANB') && isFetchConnectivityError(error)
          if (!canFallbackLocally) throw error
        }
      }
    } catch (error) {
      alert(error?.message || 'Unable to place order on server. Please try again.')
      setIsConfirming(false)
      return
    }
    setIsConfirming(false)

    addOrderToDashboard(order)

    alert('Order placed successfully!')
    window.location.href = '/'
  }

  return (
    <main ref={paymentSectionRef}>
      <div className="aq-breadcrumb-area pt-80 pb-30" data-bg-color="#F9F9F9">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12">
              <div className="aq-breadcrumb-wrap text-center">
                <div className="pd-breadcrumb-list mb-15">
                  <span>
                    <a href="/">home</a>
                  </span>
                  <span>/</span>
                  <span>
                    <a href="/?page=checkout">checkout</a>
                  </span>
                </div>
                <div className="aq-breadcrumb-content">
                  <h2 className="aq-breadcrumb-title">Checkout Page</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="aq-checkout-area pb-120 pt-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-7">
              <div className="aq-checkout-verify">
                <div className="aq-checkout-verify-item">
                  <p className="aq-checkout-verify-reveal">
                    Returning customer?{' '}
                    <button
                      type="button"
                      className="aq-checkout-login-form-reveal-btn"
                      onClick={() => setShowReturnLogin((prev) => !prev)}
                    >
                      {showReturnLogin ? 'Hide login form' : 'Click here to login'}
                    </button>
                  </p>
                  <div id="aqReturnCustomerLoginForm" className="aq-return-customer" style={{ display: showReturnLogin ? '' : 'none' }}>
                    <form action="#" onSubmit={handleReturnCustomerLogin}>
                      <div className="aq-return-customer-input">
                        <label>Email</label>
                        <input type="text" placeholder="Your Email" />
                      </div>
                      <div className="aq-return-customer-input">
                        <label>Password</label>
                        <input type="password" placeholder="Password" />
                      </div>
                      <div className="aq-return-customer-suggetions d-sm-flex align-items-center justify-content-between mb-20">
                        <div className="aq-return-customer-remeber">
                          <input id="remebers" type="checkbox" />
                          <label htmlFor="remebers">Remember me</label>
                        </div>
                        <div className="aq-return-customer-forgot">
                          <a href="#" onClick={(e) => e.preventDefault()}>
                            Forgot Password?
                          </a>
                        </div>
                      </div>
                      <button type="submit" className="aq-return-customer-btn aq-checkout-btn">
                        Login
                      </button>
                    </form>
                  </div>
                </div>

                <div className="aq-checkout-verify-item">
                  <p className="aq-checkout-verify-reveal">
                    Have a coupon?{' '}
                    <button
                      type="button"
                      className="aq-checkout-coupon-form-reveal-btn"
                      onClick={() => setShowCouponForm((prev) => !prev)}
                    >
                      {showCouponForm ? 'Hide coupon box' : 'Click here to enter your code'}
                    </button>
                  </p>
                  <div id="aqCheckoutCouponForm" className="aq-return-customer" style={{ display: showCouponForm ? '' : 'none' }}>
                    <form action="#" onSubmit={handleCouponSubmit}>
                      <div className="aq-return-customer-input">
                        <label>Coupon Code :</label>
                        <input type="text" placeholder="Coupon" />
                      </div>
                      <button type="submit" className="aq-return-customer-btn aq-checkout-btn">
                        Apply
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              <div className="aq-checkout-bill-area">
                <h3 className="aq-checkout-bill-title">Billing Details</h3>
                <div className="aq-checkout-bill-form">
                  <form action="#" onSubmit={(e) => e.preventDefault()}>
                    <div className="aq-checkout-bill-inner">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="aq-checkout-input">
                            <label>
                              Full Name <span>*</span>
                            </label>
                            <input id="checkoutFullName" type="text" placeholder="Your name" required />
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="aq-checkout-input">
                            <label>
                              Phone <span>*</span>
                            </label>
                            <input id="checkoutMobile" type="tel" placeholder="+91 98765 43210" required />
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="aq-checkout-input">
                            <label>Email address</label>
                            <input id="checkoutEmail" type="email" placeholder="email@address.com" />
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="aq-checkout-input">
                            <label>
                              Postcode ZIP / Pincode <span>*</span>
                            </label>
                            <input id="checkoutPincode" type="text" placeholder="e.g. 110001" required />
                          </div>
                        </div>

                        <div className="col-md-12">
                          <div className="aq-checkout-input">
                            <label>
                              Full Address <span>*</span>
                            </label>
                            <textarea id="checkoutAddress" placeholder="House No, Street, Area, City, State" required />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="aq-checkout-place white-bg">
                <h3 className="aq-checkout-place-title">Your Order</h3>

                <div className="aq-order-info-list">
                  <ul>
                    <li className="aq-order-info-list-header">
                      <h4>Product</h4>
                      <h4>Total</h4>
                    </li>

                    <li className="aq-order-info-list-desc">
                      <p>
                        Day Cream SPF 30 <span> x 1</span>
                      </p>
                      <span>$24.00</span>
                    </li>
                    <li className="aq-order-info-list-desc">
                      <p>
                        Under Eye Roll On Gel <span> x 1</span>
                      </p>
                      <span>$18.00</span>
                    </li>
                    <li className="aq-order-info-list-desc">
                      <p>
                        Vitamin C Glutathione Serum <span> x 1</span>
                      </p>
                      <span>$32.00</span>
                    </li>

                    <li className="aq-order-info-list-subtotal">
                      <span>Subtotal</span>
                      <span>$74.00</span>
                    </li>

                    <li className="aq-order-info-list-total">
                      <span>Total</span>
                      <span>$74.00</span>
                    </li>
                  </ul>
                </div>

                <div className="aq-checkout-btn-wrapper">
                  <button id="placeOrderBtn" type="button" className="aq-checkout-btn w-100" onClick={handleContinueToPayment}>
                    Continue to Payment
                  </button>
                </div>

                <div
                  id="paymentSection"
                  ref={paymentSectionRef}
                  style={{ display: paymentVisible ? '' : 'none', marginTop: 20 }}
                >
                  <div className="aq-checkout-payment">
                    <div className="aq-checkout-payment-item">
                      <label style={{ display: 'block', marginBottom: 10, fontWeight: 600 }}>Payment Mode</label>
                      <p className="mb-0" style={{ color: 'rgba(15,15,15,0.8)' }}>
                        Choose how you want to pay. For USDT/ANB, please complete payment within 5 minutes.
                      </p>
                    </div>

                    <div className="aq-checkout-payment-item">
                      <div className="d-flex flex-wrap" style={{ gap: 14 }}>
                        {['INR', 'USDT', 'ANB', 'EARNINGS'].map((mode) => (
                          <label key={mode} className="d-inline-flex align-items-center" style={{ gap: 8, cursor: 'pointer' }}>
                            <input
                              type="radio"
                              name="payMode"
                              value={mode}
                              checked={selectedMode === mode}
                              onChange={() => setMode(mode)}
                            />
                            <span>{mode === 'EARNINGS' ? 'Earnings Wallet' : mode}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div id="earningsBox" style={{ display: selectedMode === 'EARNINGS' ? '' : 'none' }}>
                    <div style={{ border: '1px solid #eee', borderRadius: 12, padding: 16 }}>
                      <h5 className="mb-10">Pay with Earnings Wallet</h5>
                      <p className="mb-10">
                        Wallet Balance: <b id="earningsBalanceText">${earningsBalance.toFixed(2)}</b>
                      </p>
                      <p className="mb-0">
                        Amount to pay: <b id="earningsPayAmount">${subtotalUSD.toFixed(2)}</b>
                      </p>
                      <p
                        id="earningsNote"
                        className="mt-10 mb-0"
                        style={{
                          color: earningsSufficient ? 'rgba(15,15,15,0.75)' : '#DA3F3F',
                          fontSize: 13,
                        }}
                      >
                        {earningsSufficient
                          ? 'Your earnings balance is sufficient. Confirm to place the order.'
                          : 'Insufficient earnings balance. Please choose INR/USDT/ANB.'}
                      </p>
                    </div>
                  </div>

                  <div id="inrBox" style={{ display: selectedMode === 'INR' ? '' : 'none', marginTop: 15 }}>
                    <div style={{ border: '1px solid #eee', borderRadius: 12, padding: 16 }}>
                      <h5 className="mb-10">Pay in INR (UPI)</h5>
                      <p className="mb-10">
                        UPI ID: <b id="upiIdText">{upiId}</b>
                      </p>
                      <p className="mb-15">
                        Amount: <b id="inrAmountText">₹{inrAmount}</b>
                      </p>
                      <a id="upiPayLink" href={upiPayLink} className="aq-btn-black btn-red-bg radius-30">
                        Pay via UPI
                      </a>
                    </div>
                  </div>

                  <div id="cryptoBox" style={{ display: selectedMode === 'USDT' || selectedMode === 'ANB' ? '' : 'none', marginTop: 15 }}>
                    <div style={{ border: '1px solid #eee', borderRadius: 12, padding: 16 }}>
                      <div className="d-flex flex-wrap justify-content-between align-items-center" style={{ gap: 10 }}>
                        <div>
                          <h5 className="mb-5">Scan &amp; Pay</h5>
                          <p className="mb-0" style={{ color: 'rgba(15,15,15,0.8)' }}>
                            Network: <b id="cryptoNetworkText">{usdtIntent?.network || selectedMode || 'USDT'}</b>
                          </p>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <div style={{ fontSize: 12, color: 'rgba(15,15,15,0.8)' }}>Time left</div>
                          <div id="payTimer" style={{ fontSize: 18, fontWeight: 700 }}>
                            {timerText}
                          </div>
                        </div>
                      </div>

                      <div className="row mt-15">
                        <div className="col-md-4 mb-15">
                          <div
                            style={{
                              width: '100%',
                              aspectRatio: '1 / 1',
                              border: '1px dashed #ddd',
                              borderRadius: 12,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              background: '#faf9f8',
                            }}
                          >
                            <img src={usdtQrImage} alt="USDT payment QR" style={{ width: '100%', height: '100%', borderRadius: 12 }} />
                          </div>
                        </div>
                        <div className="col-md-8 mb-15">
                          <p className="mb-10">Testnet Wallet Address</p>
                          <input id="cryptoAddress" className="aq-form-control" type="text" readOnly value={cryptoAddress} />
                          <p className="mt-10 mb-10">
                            Amount to send: <b>{usdtAmount} USDT</b>
                          </p>
                          <label className="d-flex align-items-center mb-10" style={{ gap: 8, cursor: 'pointer' }}>
                            <input
                              type="checkbox"
                              checked={hasMarkedUsdtPaid}
                              onChange={(e) => {
                                setHasMarkedUsdtPaid(e.target.checked)
                                if (!e.target.checked) {
                                  setUsdtPaymentVerified(false)
                                  setUsdtStatusText('')
                                } else {
                                  setUsdtStatusText('Checking payment status...')
                                  checkUsdtPaymentNow()
                                }
                              }}
                            />
                            <span>I have paid</span>
                          </label>
                          <button type="button" className="aq-btn-black border-btn radius-30 mb-10" onClick={checkUsdtPaymentNow}>
                            Check Payment Status
                          </button>
                          {usdtStatusText ? (
                            <p className="mb-10" style={{ fontSize: 13, color: usdtPaymentVerified ? '#1D7F3E' : '#9B6A00' }}>
                              {usdtStatusText}
                            </p>
                          ) : null}
                          <div className="d-flex flex-wrap gap-2 mt-10">
                            <button
                              id="copyCryptoAddress"
                              type="button"
                              className="aq-btn-black border-btn radius-30"
                              onClick={handleCopyCryptoAddress}
                            >
                              Copy Address
                            </button>
                            <button id="restartTimerBtn" type="button" className="aq-btn-black radius-30" onClick={handleRestartTimer}>
                              Restart 5:00
                            </button>
                          </div>
                          <p
                            id="timerNote"
                            className="mt-10 mb-0"
                            style={{ color: timerExpired ? '#DA3F3F' : 'rgba(15,15,15,0.75)', fontSize: 13 }}
                          >
                            {timerExpired
                              ? 'Timer expired. Restart the timer and complete payment again.'
                              : 'Please complete payment before timer ends.'}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="aq-checkout-btn-wrapper" style={{ marginTop: 15 }}>
                    <button
                      id="confirmOrderBtn"
                      type="button"
                      className="aq-checkout-btn w-100"
                      disabled={confirmDisabled || isConfirming}
                      onClick={handleConfirmOrder}
                    >
                      {isConfirming ? 'Processing...' : 'Confirm Order'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Checkout

