import { useEffect, useMemo, useState } from 'react'
import { getProductById } from './productData'

const DASHBOARD_STORAGE_KEY = 'rienna_dashboard_v1'

const formatDate = (date) => {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

const parseUsd = (price) => {
  const n = Number.parseFloat(String(price).replace(/[^0-9.]/g, ''))
  return Number.isFinite(n) ? n : 0
}

const ProductDetails = ({ productId, onRequireAuth, onAddToCart, onAddToWishlist }) => {
  const product = getProductById(productId)
  const [quantity, setQuantity] = useState(1)
  const [expanded, setExpanded] = useState(false)
  const [viewerCount, setViewerCount] = useState(19)
  const sizes = ['XS', 'S', 'L', 'M']
  const colors = useMemo(
    () => [
      { name: 'Brown', label: 'Chestnut', color: 'rgb(141, 105, 74)' },
      { name: 'Iridium', label: 'Iridium', color: 'rgb(58, 63, 50)' },
      { name: 'Darb', label: 'Darb', color: 'rgb(123, 124, 76)' },
    ],
    []
  )
  const [selectedSize, setSelectedSize] = useState('M')
  const [selectedColor, setSelectedColor] = useState(colors[0])
  const [earningsBalance, setEarningsBalance] = useState(0)

  const shortDescription = product.description.length > 140 ? `${product.description.slice(0, 140)}...` : product.description
  const displayDescription = expanded ? product.description : shortDescription

  useEffect(() => {
    const interval = window.setInterval(() => {
      setViewerCount((prev) => {
        const next = prev + (Math.random() > 0.5 ? 1 : -1)
        return Math.min(35, Math.max(10, next))
      })
    }, 2500)

    return () => window.clearInterval(interval)
  }, [])

  useEffect(() => {
    setQuantity(1)
    setExpanded(false)
    setSelectedSize('M')
    setSelectedColor(colors[0])
  }, [product.id, colors])

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(DASHBOARD_STORAGE_KEY)
      if (!raw) {
        setEarningsBalance(0)
        return
      }
      const saved = JSON.parse(raw)
      setEarningsBalance(typeof saved.earningsBalance === 'number' ? saved.earningsBalance : 0)
    } catch {
      setEarningsBalance(0)
    }
  }, [])

  const handleQtyInput = (event) => {
    const value = Number.parseInt(event.target.value, 10)
    if (Number.isNaN(value)) {
      setQuantity(1)
      return
    }
    setQuantity(Math.min(99, Math.max(1, value)))
  }

  const handleAddToCart = () => {
    if (!onRequireAuth?.('Add to cart')) return
    onAddToCart?.({
      id: `${product.id}-${selectedSize}-${selectedColor.name}`,
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
      color: selectedColor.label,
      quantity,
      url: `/?page=product-details&product=${product.id}`,
    })
  }

  const handleAddToWishlist = () => {
    if (!onRequireAuth?.('Wishlist')) return
    onAddToWishlist?.({
      id: product.id,
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      url: `/?page=product-details&product=${product.id}`,
    })
  }

  const handleBuyNow = (event) => {
    event.preventDefault()
    if (!onRequireAuth?.('Buy now')) return
    window.location.href = '/?page=checkout'
  }

  const handleBuyWithEarnings = () => {
    if (!onRequireAuth?.('Buy with earnings')) return
    const unitAmount = parseUsd(product.price)
    const totalAmount = unitAmount * quantity
    if (totalAmount <= 0) return
    if (earningsBalance < totalAmount) {
      alert('Insufficient earnings balance for this purchase.')
      return
    }

    try {
      const raw = window.localStorage.getItem(DASHBOARD_STORAGE_KEY)
      const saved = raw ? JSON.parse(raw) : {}
      const prevOrders = Array.isArray(saved.orders) ? saved.orders : []
      const prevSpentFromEarnings = typeof saved.spentFromEarnings === 'number' ? saved.spentFromEarnings : 0
      const prevBalance = typeof saved.earningsBalance === 'number' ? saved.earningsBalance : 0
      const nextBalance = Math.max(0, prevBalance - totalAmount)

      const newOrder = {
        id: `#RIN-${Math.floor(1000 + Math.random() * 9000)}`,
        date: formatDate(new Date()),
        items: quantity,
        amount: totalAmount,
        status: 'Paid (Earnings)',
      }

      window.localStorage.setItem(
        DASHBOARD_STORAGE_KEY,
        JSON.stringify({
          ...saved,
          orders: [newOrder, ...prevOrders],
          earningsBalance: nextBalance,
          spentFromEarnings: prevSpentFromEarnings + totalAmount,
        })
      )
      setEarningsBalance(nextBalance)
      alert('Order placed successfully using earnings.')
    } catch {
      alert('Unable to complete earnings purchase right now. Please try again.')
    }
  }

  return (
    <div className="aq-product-area pb-60 pt-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="aq-product-thumb mb-30">
              <img src={product.image} alt={product.name} className="w-100" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="aq-product-details-wrap pt-25">
              <div className="aq-product-details-radius-style">
                <div className="aq-product-badge">
                  <span className="clr-sale" data-bg-color="#12947B" style={{ backgroundColor: 'rgb(18, 148, 123)' }}>
                    In Stock
                  </span>
                </div>
              </div>

              <div className="aq-product-details-category">
                <span>{product.category}</span>
              </div>
              <h3 className="aq-product-details-title mb-10">{product.name}</h3>

              <div className="tp-product-details-inventory">
                <div className="aq-product-details-rating-wrapper d-flex align-items-center">
                  <div className="aq-product-details-rating-box d-flex align-items-center mb-15">
                    <div className="aq-product-details-rating">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                            <path
                              d="M6.6574 0L8.50892 4.4516L13.3148 4.83688L9.65322 7.9734L10.7719 12.6631L6.6574 10.15L2.5429 12.6631L3.66157 7.9734L0 4.83688L4.80587 4.4516L6.6574 0Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      ))}
                      <span className="avarage">4.75</span>
                    </div>
                    <div className="aq-product-details-reviews">
                      <span>( 1 review )</span>
                    </div>
                  </div>
                  <div className="aq-product-details-fomo-mesg mb-15">
                    <span>
                      <i>🔥</i> 41 sold in last 16 hours
                    </span>
                  </div>
                </div>
              </div>

              <div className="aq-product-details-price-wrap mb-20">
                <ins>
                  <span className="aq-product-details-price new-price">{product.price}</span>
                </ins>
              </div>

              <div className="aq-product-details-mesg-wrap mb-25">
                <p className="slide-text">{displayDescription}</p>
                <button className="toggle-btn" onClick={() => setExpanded((prev) => !prev)}>
                  {expanded ? 'Read Less..' : 'Read More..'}
                </button>
              </div>

              <div className="product-details-people-view d-inline-flex align-items-center mb-30">
                <span className="product-details-people-viewicon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12" viewBox="0 0 15 12" fill="none">
                    <path
                      d="M0.599609 5.59961C0.599609 5.59961 3.09961 0.599609 7.47461 0.599609C11.8496 0.599609 14.3496 5.59961 14.3496 5.59961C14.3496 5.59961 11.8496 10.5996 7.47461 10.5996C3.09961 10.5996 0.599609 5.59961 0.599609 5.59961Z"
                      stroke="#141414"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.47461 7.47461C8.51014 7.47461 9.34961 6.63514 9.34961 5.59961C9.34961 4.56408 8.51014 3.72461 7.47461 3.72461C6.43908 3.72461 5.59961 4.56408 5.59961 5.59961C5.59961 6.63514 6.43908 7.47461 7.47461 7.47461Z"
                      stroke="#141414"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <p>
                  <span id="viewerCount">{viewerCount}</span> people are viewing this right now
                </p>
              </div>



              <div className="aq-product-details-action-wrapper mb-25">
                <div className="aq-product-details-action-item-wrapper d-sm-flex align-items-center">
                  <div className="aq-product-details-quantity">
                    <div className="aq-product-quantity mb-10 mr-10">
                      <span className="aq-cart-minus" onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}>
                        <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 1H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <input className="aq-cart-input" type="text" value={quantity} onChange={handleQtyInput} />
                      <span className="aq-cart-plus" onClick={() => setQuantity((prev) => Math.min(99, prev + 1))}>
                        <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 6H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M5.5 10.5V1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="aq-product-details-add-to-cart d-flex align-items-center mb-10 w-100">
                    <div className="aq-product-details-add-to-cart-btn w-100">
                      <button className="aq-btn-black btn-square w-100" onClick={handleAddToCart}>
                        Add To Cart
                      </button>
                    </div>
                    <button
                      type="button"
                      className="aq-product-action-btn action-btn-2 aq-wishlist-btn aq-tooltip-top"
                      onClick={handleAddToWishlist}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                        <path
                          d="M14.7197 1.52347C12.5744 0.244089 10.7019 0.759666 9.57712 1.58092C9.11591 1.91766 8.88531 2.08602 8.74963 2.08602C8.61396 2.08602 8.38336 1.91766 7.92215 1.58092C6.79733 0.759666 4.9249 0.244089 2.77958 1.52347C-0.0359114 3.20253 -0.67299 8.7418 5.82126 13.4151C7.05821 14.3052 7.67668 14.7502 8.74963 14.7502C9.82258 14.7502 10.4411 14.3052 11.678 13.4151C18.1723 8.7418 17.5352 3.20253 14.7197 1.52347Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="aq-tooltip-item">Wishlist</span>
                    </button>
                    <button type="button" className="aq-product-action-btn action-btn-2 aq-compare-btn aq-tooltip-top">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                        <path
                          d="M11.6755 5.91828L14.2612 3.33412M14.2612 3.33412L11.6755 0.75M14.2612 3.33412L1.74999 3.33374M3.33562 8.07153L0.75 10.6557L3.33562 13.2398M13.7724 10.75H1.26122"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="aq-tooltip-item">Compare</span>
                    </button>
                  </div>
                </div>
                <div className="aq-product-details-buy-now-btn">
                  <a
                    href="/?page=checkout"
                    className="aq-btn-black btn-red-bg btn-square w-100 d-inline-block text-center"
                    onClick={handleBuyNow}
                  >
                    Buy Now
                  </a>
                </div>
                <div className="aq-product-details-buy-now-btn mt-10">
                  <button
                    type="button"
                    className="aq-btn-black btn-square w-100"
                    onClick={handleBuyWithEarnings}
                    title={`Earnings balance: $${earningsBalance.toFixed(2)}`}
                  >
                    Buy With Earnings (${earningsBalance.toFixed(2)} available)
                  </button>
                </div>
              </div>

              <div className="aq-product-details-mesg-wrap">
                <ul>
                  {product.highlights.map((highlight) => (
                    <li key={highlight}>
                      <div className="aq-product-details-mesg d-flex align-items-center">
                        <span>{highlight}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="aq-product-details-payment d-flex align-items-center justify-content-between">
                <p>
                  Guaranteed safe <br /> and secure checkout
                </p>
                <img src="/images/payment.png" alt="payment" />
              </div>
            </div>
          </div>
        </div>

        <div className="product-details-nav nav nav-tab justify-content-center p-relative" id="navPresentationTab" role="tablist">
          <button className="nav-links active" id="nav-description-tab" data-bs-toggle="tab" data-bs-target="#nav-description" type="button" role="tab" aria-controls="nav-description" aria-selected="true">
            Description
          </button>
          <button className="nav-links" id="nav-addInfo-tab" data-bs-toggle="tab" data-bs-target="#nav-addInfo" type="button" role="tab" aria-controls="nav-addInfo" aria-selected="false">
            Additional information
          </button>
          <button className="nav-links" id="nav-review-tab" data-bs-toggle="tab" data-bs-target="#nav-review" type="button" role="tab" aria-controls="nav-review" aria-selected="false">
            Reviews (4)
          </button>
          <button className="nav-links" id="nav-question-tab" data-bs-toggle="tab" data-bs-target="#nav-question" type="button" role="tab" aria-controls="nav-question" aria-selected="false">
            Ask &amp; Question
          </button>
          <button className="nav-links" id="nav-faq-tab" data-bs-toggle="tab" data-bs-target="#nav-faq" type="button" role="tab" aria-controls="nav-faq" aria-selected="false">
            Faq
          </button>
        </div>

        <div className="tab-content mt-40 pt-40" id="navPresentationTabContent">
          <div className="tab-pane fade show active" id="nav-description" role="tabpanel" aria-labelledby="nav-description-tab">
            <div className="product-description">
              <h4 className="mb-20">Description</h4>
              <p>{product.description}</p>
              <ul className="mt-20">
                {product.highlights.map((highlight) => (
                  <li key={highlight} className="mb-10">✓ {highlight}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="tab-pane fade" id="nav-addInfo" role="tabpanel" aria-labelledby="nav-addInfo-tab">
            <div className="product-additional-info">
              <h4 className="mb-20">Additional Information</h4>
              <table className="table">
                <tbody>
                  <tr>
                    <td><strong>Product Type:</strong></td>
                    <td>{product.category}</td>
                  </tr>
                  <tr>
                    <td><strong>Price:</strong></td>
                    <td>{product.price}</td>
                  </tr>
                  <tr>
                    <td><strong>Availability:</strong></td>
                    <td>In Stock</td>
                  </tr>
                  <tr>
                    <td><strong>Suitable For:</strong></td>
                    <td>All Skin Types</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="tab-pane fade" id="nav-review" role="tabpanel" aria-labelledby="nav-review-tab">
            <div className="product-reviews">
              <h4 className="mb-20">Customer Reviews (4)</h4>
              <div className="review-item mb-20 pb-20" style={{ borderBottom: '1px solid #eee' }}>
                <div className="d-flex justify-content-between mb-10">
                  <strong>Sarah Johnson</strong>
                  <span style={{ color: '#12947B' }}>★★★★★</span>
                </div>
                <p>Excellent product! Works wonders for my skin. Highly recommended!</p>
              </div>
              <div className="review-item mb-20 pb-20" style={{ borderBottom: '1px solid #eee' }}>
                <div className="d-flex justify-content-between mb-10">
                  <strong>Emma Wilson</strong>
                  <span style={{ color: '#12947B' }}>★★★★★</span>
                </div>
                <p>Love the lightweight formula. Perfect for daily use without feeling heavy.</p>
              </div>
              <div className="review-item mb-20 pb-20" style={{ borderBottom: '1px solid #eee' }}>
                <div className="d-flex justify-content-between mb-10">
                  <strong>Michael Brown</strong>
                  <span style={{ color: '#12947B' }}>★★★★☆</span>
                </div>
                <p>Great product, though a bit pricey. Results are noticeable within 2 weeks.</p>
              </div>
              <div className="review-item mb-20">
                <div className="d-flex justify-content-between mb-10">
                  <strong>Jessica Lee</strong>
                  <span style={{ color: '#12947B' }}>★★★★★</span>
                </div>
                <p>Amazing! My skin feels refreshed and glowing. Definitely buying again!</p>
              </div>
            </div>
          </div>

          <div className="tab-pane fade" id="nav-question" role="tabpanel" aria-labelledby="nav-question-tab">
            <div className="product-questions">
              <h4 className="mb-20">Ask a Question</h4>
              <form>
                <div className="mb-20">
                  <label className="form-label">Your Name</label>
                  <input type="text" className="form-control" placeholder="Enter your name" />
                </div>
                <div className="mb-20">
                  <label className="form-label">Your Email</label>
                  <input type="email" className="form-control" placeholder="Enter your email" />
                </div>
                <div className="mb-20">
                  <label className="form-label">Your Question</label>
                  <textarea className="form-control" rows="4" placeholder="Type your question here..."></textarea>
                </div>
                <button type="submit" className="aq-btn-black btn-square">Submit Question</button>
              </form>
            </div>
          </div>

          <div className="tab-pane fade" id="nav-faq" role="tabpanel" aria-labelledby="nav-faq-tab">
            <div className="product-faq">
              <h4 className="mb-20">Frequently Asked Questions</h4>
              <div className="faq-item mb-20 pb-20" style={{ borderBottom: '1px solid #eee' }}>
                <strong className="d-block mb-10">Q: Is this product suitable for sensitive skin?</strong>
                <p>A: Yes, this product is formulated to be gentle on all skin types including sensitive skin. However, if you have specific concerns, please do a patch test first.</p>
              </div>
              <div className="faq-item mb-20 pb-20" style={{ borderBottom: '1px solid #eee' }}>
                <strong className="d-block mb-10">Q: How often should I use this product?</strong>
                <p>A: We recommend using this product daily for best results. Apply once in the morning and once in the evening.</p>
              </div>
              <div className="faq-item mb-20 pb-20" style={{ borderBottom: '1px solid #eee' }}>
                <strong className="d-block mb-10">Q: What is the shelf life?</strong>
                <p>A: The product has a shelf life of 24 months from the date of manufacture. Once opened, use within 6 months.</p>
              </div>
              <div className="faq-item mb-20">
                <strong className="d-block mb-10">Q: Is there any warranty or return policy?</strong>
                <p>A: Yes, we offer a 30-day money-back guarantee if you're not satisfied with the product. Please contact our customer service for details.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
