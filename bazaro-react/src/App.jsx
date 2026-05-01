import BackToTop from './components/BackToTop'
import Search from './components/Search'
import Preloader from './components/Preloader'
import Header from './components/Header'
import Offcanvas from './components/Offcanvas'
import LoginModal from './components/LoginModal'
import HomeContent from './components/HomeContent'
import ProductDetails from './components/ProductDetails'
import Dashboard from './components/Dashboard'
import ContactPage from './components/ContactPage'
import Checkout from './components/Checkout'
import Footer from './components/Footer'
import TemplateScripts from './components/TemplateScripts'
import SliderInit from './components/SliderInit'
import { useEffect, useMemo, useRef, useState } from 'react'
import { isApiConfigured } from './services/apiClient'
import { loginUser, logoutUser, registerUser } from './services/authService'
import './App.css'

const AUTH_STORAGE_KEY = 'rienna_auth_v1'
const CART_STORAGE_KEY = 'rienna_cart_v1'
const WISHLIST_STORAGE_KEY = 'rienna_wishlist_v1'

const getInitialAuth = () => {
  try {
    const saved = window.localStorage.getItem(AUTH_STORAGE_KEY)
    if (!saved) return { isRegistered: false, isLoggedIn: false, userName: 'Rienna Member', userEmail: '' }
    const parsed = JSON.parse(saved)
    return {
      isRegistered: Boolean(parsed?.isRegistered),
      isLoggedIn: Boolean(parsed?.isLoggedIn),
      userName: parsed?.userName || 'Rienna Member',
      userEmail: parsed?.userEmail || '',
    }
  } catch {
    return { isRegistered: false, isLoggedIn: false, userName: 'Rienna Member', userEmail: '' }
  }
}

const getInitialItems = (storageKey) => {
  try {
    const raw = window.localStorage.getItem(storageKey)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

const cleanupModalArtifacts = () => {
  document.body.classList.remove('modal-open')
  document.body.style.removeProperty('padding-right')
  document.body.style.removeProperty('overflow')
  document.querySelectorAll('.modal-backdrop').forEach((node) => node.remove())
}

const closeModalHard = (modalElement) => {
  if (!modalElement) return
  modalElement.classList.remove('show')
  modalElement.style.display = 'none'
  modalElement.setAttribute('aria-hidden', 'true')
  modalElement.removeAttribute('aria-modal')
}

const openModalHard = (modalElement) => {
  if (!modalElement) return
  cleanupModalArtifacts()
  modalElement.style.display = 'block'
  modalElement.classList.add('show')
  modalElement.setAttribute('aria-modal', 'true')
  modalElement.removeAttribute('aria-hidden')
  document.body.classList.add('modal-open')
  document.body.style.overflow = 'hidden'
  const backdrop = document.createElement('div')
  backdrop.className = 'modal-backdrop fade show'
  document.body.appendChild(backdrop)
}

const forceCloseAllAuthModals = () => {
  const modalIds = ['exampleModalToggle', 'exampleModalToggle2', 'exampleModalToggle3', 'logoutConfirmModal']

  modalIds.forEach((id) => {
    const modalElement = document.getElementById(id)
    if (!modalElement) return

    const bootstrapModal = window.bootstrap?.Modal
    if (bootstrapModal) {
      const instance = bootstrapModal.getOrCreateInstance(modalElement)
      instance.hide()
    }

    closeModalHard(modalElement)
  })

  cleanupModalArtifacts()

  // Some Bootstrap transitions can append a late backdrop; clear again.
  ;[50, 120, 250, 400].forEach((delay) => {
    window.setTimeout(cleanupModalArtifacts, delay)
  })
}

const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
const parseUsd = (price) => {
  const n = Number.parseFloat(String(price).replace(/[^0-9.]/g, ''))
  return Number.isFinite(n) ? n : 0
}

function App() {
  const [authState, setAuthState] = useState(getInitialAuth)
  const authActionLoadingRef = useRef(false)
  const [cartItems, setCartItems] = useState(() => getInitialItems(CART_STORAGE_KEY))
  const [wishlistItems, setWishlistItems] = useState(() => getInitialItems(WISHLIST_STORAGE_KEY))
  const params = new URLSearchParams(window.location.search)
  const page = params.get('page')
  const productId = params.get('product') || 'day-cream'
  const showDetailsPage = page === 'product-details'
  const showDashboardPage = page === 'dashboard'
  const showContactPage = page === 'contact'
  const showCheckoutPage = page === 'checkout'

  useEffect(() => {
    try {
      window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(authState))
    } catch {
      // ignore localStorage failure
    }
  }, [authState])

  useEffect(() => {
    try {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems))
    } catch {
      // ignore localStorage failure
    }
  }, [cartItems])

  useEffect(() => {
    try {
      window.localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlistItems))
    } catch {
      // ignore localStorage failure
    }
  }, [wishlistItems])

  useEffect(() => {
    const cartCountNode = document.querySelector('.aq-header-top-cart .count-box')
    if (cartCountNode) {
      const totalQty = cartItems.reduce((sum, item) => sum + (Number(item.quantity) || 0), 0)
      cartCountNode.textContent = String(totalQty)
    }

    const cartBody = document.querySelector('.aq-cartmini-body')
    const cartEmpty = document.querySelector('.cartmini-empty')
    const cartSubtotalNode = document.querySelector('.aq-cartmini-total-value')
    if (cartSubtotalNode) {
      const subtotal = cartItems.reduce((sum, item) => sum + parseUsd(item.price) * (Number(item.quantity) || 0), 0)
      cartSubtotalNode.textContent = `$${subtotal.toFixed(2)} USD`
    }

    if (cartBody) {
      const renderedItems = cartItems
        .map(
          (item) => `
            <div class="aq-cartmini-product-item mb-15 item-delete d-flex align-items-center">
              <div class="aq-cartmini-product-thumbnail">
                <a href="${item.url || '#'}">
                  <img src="${item.image}" alt="${item.name}">
                </a>
              </div>
              <div class="aq-cartmini-product-summary">
                <h4 class="aq-product-title"><a href="${item.url || '#'}">${item.name}</a></h4>
                <span class="aq-cartmini-product-size"><label>Size:</label> ${item.size || 'M'}</span>
                <span class="aq-cartmini-product-price">${item.price}</span>
                <div class="aq-product-details-quantity d-flex align-items-center">
                  <div class="aq-product-quantity">
                    <input class="aq-cart-input" type="text" value="${item.quantity || 1}" readonly>
                  </div>
                </div>
              </div>
            </div>
          `
        )
        .join('')
      cartBody.innerHTML = renderedItems
      if (cartEmpty) {
        cartEmpty.classList.toggle('d-none', cartItems.length > 0)
      }
    }

    const wishlistCountNode = document.querySelector('.aq-header-top-wishlist .count-box')
    if (wishlistCountNode) wishlistCountNode.textContent = String(wishlistItems.length)

    const wishlistPopupCountNode = document.querySelector('.aq-wishlist-popup-count')
    if (wishlistPopupCountNode) wishlistPopupCountNode.textContent = `(${wishlistItems.length})`

    const wishlistMiddle = document.querySelector('.aq-wishlist-popup-middle')
    if (wishlistMiddle) {
      wishlistMiddle.innerHTML = wishlistItems
        .map(
          (item) => `
            <div class="aq-wishlist-popup-item d-flex justify-content-center justify-content-sm-between align-items-center">
              <div class="aq-wishlist-popup-thumb-wrap d-flex align-items-center">
                <div class="aq-wishlist-popup-thumb d-flex align-items-center">
                  <a href="${item.url || '#'}">
                    <img src="${item.image}" alt="${item.name}">
                  </a>
                  <div class="aq-wishlist-popup-thumb-info">
                    <h4 class="aq-wishlist-popup-title"><a href="${item.url || '#'}">${item.name}</a></h4>
                    <span class="aq-wishlist-popup-price">${item.price}</span>
                  </div>
                </div>
              </div>
            </div>
          `
        )
        .join('')
    }

    const wishlistNotice = document.querySelector('.aq-wishlist-popup-text p')
    if (wishlistNotice) {
      const lastItem = wishlistItems[0]
      wishlistNotice.textContent = lastItem
        ? `${lastItem.name} has been added to Wishlist.`
        : 'No items in wishlist yet.'
    }
  }, [cartItems, wishlistItems])

  useEffect(() => {
    if (authState.isLoggedIn) forceCloseAllAuthModals()
  }, [authState.isLoggedIn])

  useEffect(() => {
    const loginBtn = document.querySelector('#exampleModalToggle .aq-login-btn.w-100.mb-10')
    const registerBtn = document.querySelector('#exampleModalToggle2 .aq-login-btn.w-100.mb-15')
    const loginModalEl = document.getElementById('exampleModalToggle')
    const loginModalRoot = document.getElementById('exampleModalToggle')
    const registerModalRoot = document.getElementById('exampleModalToggle2')

    const completeLogin = async () => {
      const loginEmail = loginModalRoot?.querySelector('input[type="email"]')?.value?.trim() || ''
      const loginPassword = loginModalRoot?.querySelector('input[type="password"]')?.value?.trim() || ''

      if (!loginEmail || !loginPassword) {
        window.alert('Please fill email and password before login.')
        return false
      }

      if (!isValidEmail(loginEmail)) {
        window.alert('Please enter a valid email address.')
        return false
      }

      if (authActionLoadingRef.current) return false
      authActionLoadingRef.current = true
      try {
        if (isApiConfigured()) {
          const response = await loginUser({ email: loginEmail, password: loginPassword })
          const user = response?.user || {}
          const fallbackNameFromEmail = loginEmail ? loginEmail.split('@')[0] : ''
          setAuthState((prev) => ({
            ...prev,
            isRegistered: true,
            isLoggedIn: true,
            userEmail: user.email || loginEmail || prev.userEmail || '',
            userName: user.name || prev.userName || fallbackNameFromEmail || 'Rienna Member',
          }))
        } else {
          const fallbackNameFromEmail = loginEmail ? loginEmail.split('@')[0] : ''
          setAuthState((prev) => ({
            ...prev,
            isRegistered: true,
            isLoggedIn: true,
            userEmail: loginEmail || prev.userEmail || '',
            userName: prev.userName || fallbackNameFromEmail || 'Rienna Member',
          }))
        }
      } catch (error) {
        window.alert(error?.message || 'Login failed. Please try again.')
        return false
      } finally {
        authActionLoadingRef.current = false
      }

      forceCloseAllAuthModals()

      const bootstrapModal = window.bootstrap?.Modal
      if (bootstrapModal && loginModalEl) {
        bootstrapModal.getOrCreateInstance(loginModalEl).hide()
      }

      return true
    }

    const completeRegistration = async () => {
      // Register and log in immediately to avoid modal transition lockups.
      const registerName = registerModalRoot?.querySelector('input[name="register_name"]')?.value?.trim() || ''
      const registerEmail = registerModalRoot?.querySelector('input[name="register_email"]')?.value?.trim() || ''
      const registerMobile = registerModalRoot?.querySelector('input[name="register_phone"]')?.value?.trim() || ''
      const registerReferralCode =
        registerModalRoot?.querySelector('input[name="register_referral_code"]')?.value?.trim() || ''
      const registerPasswords = Array.from(registerModalRoot?.querySelectorAll('input[type="password"]') || [])
      const registerPassword = registerPasswords[0]?.value?.trim() || ''
      const registerConfirmPassword = registerPasswords[1]?.value?.trim() || ''

      if (!registerName || !registerEmail || !registerMobile || !registerPassword || !registerConfirmPassword) {
        window.alert('Please fill all required registration fields.')
        return false
      }

      if (!isValidEmail(registerEmail)) {
        window.alert('Please enter a valid email address.')
        return false
      }

      if (registerPassword.length < 6) {
        window.alert('Password should be at least 6 characters.')
        return false
      }

      if (registerPassword !== registerConfirmPassword) {
        window.alert('Password and confirmation password must match.')
        return false
      }

      if (authActionLoadingRef.current) return false
      authActionLoadingRef.current = true
      try {
        if (isApiConfigured()) {
          const response = await registerUser({
            name: registerName,
            email: registerEmail,
            phone: registerMobile,
            password: registerPassword,
            referralCode: registerReferralCode,
          })
          const user = response?.user || {}
          const fallbackNameFromEmail = registerEmail ? registerEmail.split('@')[0] : ''
          setAuthState((prev) => ({
            ...prev,
            isRegistered: true,
            isLoggedIn: true,
            userName: user.name || registerName || fallbackNameFromEmail || prev.userName || 'Rienna Member',
            userEmail: user.email || registerEmail || prev.userEmail || '',
          }))
        } else {
          const fallbackNameFromEmail = registerEmail ? registerEmail.split('@')[0] : ''
          setAuthState((prev) => ({
            ...prev,
            isRegistered: true,
            isLoggedIn: true,
            userName: registerName || fallbackNameFromEmail || prev.userName || 'Rienna Member',
            userEmail: registerEmail || prev.userEmail || '',
          }))
        }
      } catch (error) {
        window.alert(error?.message || 'Registration failed. Please try again.')
        return false
      } finally {
        authActionLoadingRef.current = false
      }

      forceCloseAllAuthModals()
      return true
    }

    if (loginBtn) loginBtn.type = 'button'
    if (registerBtn) registerBtn.type = 'button'

    const blockAndHandleAuthClick = (event) => {
      const loginTrigger = event.target.closest('#exampleModalToggle .aq-login-btn.w-100.mb-10')
      const registerTrigger = event.target.closest('#exampleModalToggle2 .aq-login-btn.w-100.mb-15')
      if (!loginTrigger && !registerTrigger) return

      event.preventDefault()
      event.stopPropagation()
      event.stopImmediatePropagation?.()

      if (loginTrigger) void completeLogin()
      if (registerTrigger) void completeRegistration()
    }

    const blockEnterSubmit = (event) => {
      if (event.key !== 'Enter') return
      const insideLoginModal = loginModalRoot?.contains(event.target)
      const insideRegisterModal = registerModalRoot?.contains(event.target)
      if (!insideLoginModal && !insideRegisterModal) return

      event.preventDefault()
      event.stopPropagation()
      event.stopImmediatePropagation?.()

      if (insideLoginModal) void completeLogin()
      if (insideRegisterModal) void completeRegistration()
    }

    document.addEventListener('click', blockAndHandleAuthClick, true)
    document.addEventListener('keydown', blockEnterSubmit, true)

    return () => {
      document.removeEventListener('click', blockAndHandleAuthClick, true)
      document.removeEventListener('keydown', blockEnterSubmit, true)
      cleanupModalArtifacts()
    }
  }, [])

  const loginPromptMessage = useMemo(() => {
    if (!authState.isRegistered) return 'Please register first. New users must create an account before continuing.'
    return 'Please login first to continue.'
  }, [authState.isRegistered])

  const handleLogout = async () => {
    try {
      if (isApiConfigured()) {
        await logoutUser()
      }
    } catch {
      // keep local logout flow working even if api call fails
    }
    setAuthState((prev) => ({
      ...prev,
      isLoggedIn: false,
    }))
    forceCloseAllAuthModals()
    window.location.assign(`${window.location.pathname}`)
  }

  const openAuthModal = () => {
    const modalId = authState.isRegistered ? 'exampleModalToggle' : 'exampleModalToggle2'
    const modalElement = document.getElementById(modalId)
    if (!modalElement) return

    const bootstrapModal = window.bootstrap?.Modal
    if (bootstrapModal) {
      const instance = bootstrapModal.getOrCreateInstance(modalElement)
      instance.show()
      return
    }
    openModalHard(modalElement)
  }

  const openLogoutConfirmModal = () => {
    const modalElement = document.getElementById('logoutConfirmModal')
    if (!modalElement) return

    const bootstrapModal = window.bootstrap?.Modal
    if (bootstrapModal) {
      const instance = bootstrapModal.getOrCreateInstance(modalElement)
      instance.show()
      return
    }
    openModalHard(modalElement)
  }

  const openTemplatePanel = (panelType) => {
    if (panelType === 'wishlist') {
      document.querySelector('.aq-wishlist-active')?.classList.add('opened')
      document.querySelector('.body-overlay')?.classList.add('opened')
      return
    }
    if (panelType === 'cart') {
      document.querySelector('.aq-cartmini-active')?.classList.add('opened')
      document.querySelector('.body-overlay')?.classList.add('opened')
    }
  }

  useEffect(() => {
    const offcanvasAuthLink = document.querySelector('.aq-offcanvas-bottom .aq-offcanvas-btn')
    const offcanvasWishlistLink = document.querySelector('.aq-offcanvas-bottom .aq-offcanvas-btn.btn-black-bg')
    const desktopAccountBtn = document.querySelector('.aq-header-top-account button')
    const bottomMenuItems = Array.from(document.querySelectorAll('.aq-bottom-menu .aq-bottom-menu-item'))

    if (offcanvasAuthLink) {
      offcanvasAuthLink.textContent = authState.isLoggedIn ? 'Logout' : 'Login'
      offcanvasAuthLink.setAttribute('data-auth-trigger', authState.isLoggedIn ? 'logout' : 'login')
    }

    if (offcanvasWishlistLink) {
      offcanvasWishlistLink.setAttribute('data-mobile-action', 'wishlist')
    }

    bottomMenuItems.forEach((item) => {
      const label = String(item.querySelector('span')?.textContent || '')
        .trim()
        .toLowerCase()
      const anchor = item.closest('a')

      if (label === 'home') {
        item.setAttribute('data-mobile-action', 'home')
        if (anchor) anchor.setAttribute('href', '/')
      }
      if (label === 'shop') {
        item.setAttribute('data-mobile-action', 'shop')
        if (anchor) anchor.setAttribute('href', '/#rienna-products')
      }
      if (label === 'account') {
        item.setAttribute('data-mobile-action', 'account')
        if (anchor) anchor.setAttribute('href', '/?page=dashboard')
      }
      if (label === 'wishlist') {
        item.setAttribute('data-mobile-action', 'wishlist')
      }
      if (label === 'cart') {
        item.setAttribute('data-mobile-action', 'cart')
      }
    })

    if (desktopAccountBtn) {
      desktopAccountBtn.setAttribute('data-auth-trigger', authState.isLoggedIn ? 'logout' : 'login')
      desktopAccountBtn.setAttribute('aria-label', authState.isLoggedIn ? 'Logout' : 'Login')
      desktopAccountBtn.setAttribute('title', authState.isLoggedIn ? 'Logout' : 'Login')
      if (authState.isLoggedIn) {
        desktopAccountBtn.removeAttribute('data-bs-target')
        desktopAccountBtn.removeAttribute('data-bs-toggle')
      } else {
        desktopAccountBtn.setAttribute('data-bs-target', '#exampleModalToggle')
        desktopAccountBtn.setAttribute('data-bs-toggle', 'modal')
      }
    }

    const handleAuthActionClick = (event) => {
      const authTrigger = event.target.closest('[data-auth-trigger]')
      if (!authTrigger) return

      const action = authTrigger.getAttribute('data-auth-trigger')
      if (action === 'logout') {
        event.preventDefault()
        openLogoutConfirmModal()
        return
      }

      if (action === 'login') {
        event.preventDefault()
        openAuthModal()
      }
    }

    const handleMobileQuickAction = (event) => {
      const actionNode = event.target.closest('[data-mobile-action]')
      if (!actionNode) return

      const action = String(actionNode.getAttribute('data-mobile-action') || '').trim()
      if (!action) return

      if (action === 'account' && !authState.isLoggedIn) {
        event.preventDefault()
        openAuthModal()
        return
      }

      if (action === 'wishlist' || action === 'cart') {
        event.preventDefault()
        openTemplatePanel(action)
      }
    }

    document.addEventListener('click', handleAuthActionClick, true)
    document.addEventListener('click', handleMobileQuickAction, true)
    return () => {
      document.removeEventListener('click', handleAuthActionClick, true)
      document.removeEventListener('click', handleMobileQuickAction, true)
    }
  }, [authState.isLoggedIn, authState.isRegistered])

  const handleRequireAuth = () => {
    if (authState.isLoggedIn) return true
    openAuthModal()
    return false
  }

  const handleAddToCart = (item) => {
    if (!handleRequireAuth()) return
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (cartItem) => cartItem.id === item.id && cartItem.size === item.size && cartItem.color === item.color
      )
      if (existingIndex === -1) return [item, ...prev]
      const next = [...prev]
      next[existingIndex] = {
        ...next[existingIndex],
        quantity: (Number(next[existingIndex].quantity) || 0) + (Number(item.quantity) || 1),
      }
      return next
    })
  }

  const handleAddToWishlist = (item) => {
    if (!handleRequireAuth()) return
    setWishlistItems((prev) => {
      const exists = prev.some((wishlistItem) => wishlistItem.id === item.id)
      if (exists) return prev
      return [item, ...prev]
    })
  }

  return (
    <>
      <SliderInit />
      <Preloader />
      <BackToTop />
      <Search />
      <Header />
      <Offcanvas />
      <LoginModal />
      <div className="aq-login-modal-style">
        <div className="modal fade" id="logoutConfirmModal" role="dialog" aria-hidden="true" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="aq-login-wrapper">
                <div className="aq-login-top text-center mb-20">
                  <h3 className="aq-login-title">Logout Confirmation</h3>
                  <p className="mb-0">Are you sure you want to logout?</p>
                </div>
                <div className="aq-login-bottom-wrap mb-0">
                  <button
                    type="button"
                    className="aq-login-btn btn-transparent w-100 mb-10"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button type="button" className="aq-login-btn w-100" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showDashboardPage ? (
        authState.isLoggedIn ? (
          <Dashboard userName={authState.userName} userEmail={authState.userEmail} />
        ) : (
          <section className="aq-product-area pb-60 pt-40">
            <div className="container text-center">
              <h3 className="aq-section-title ff-satoshi-med mb-10">Login Required</h3>
              <p className="mb-20">{loginPromptMessage}</p>
              <button type="button" className="aq-btn-black btn-red-bg radius-30" onClick={openAuthModal}>
                Continue to Login / Register
              </button>
            </div>
          </section>
        )
      ) : showContactPage ? (
        <ContactPage />
      ) : showCheckoutPage ? (
        <Checkout />
      ) : showDetailsPage ? (
        <ProductDetails
          productId={productId}
          onRequireAuth={handleRequireAuth}
          onAddToCart={handleAddToCart}
          onAddToWishlist={handleAddToWishlist}
        />
      ) : null}
      {!showDashboardPage && !showDetailsPage && !showContactPage && !showCheckoutPage && <HomeContent />}
      <Footer />
      <TemplateScripts />
    </>
  )
}

export default App
