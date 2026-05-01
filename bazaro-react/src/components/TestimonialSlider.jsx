import { products } from './productData'

const testimonials = [
  {
    text: `“${products[0].name} has become my everyday essential. It hydrates well and feels super light on my skin.”`,
    name: 'Rienna Customer',
    badge: 'Verified Buyer',
  },
  {
    text: `“The ${products[2].name} gave me a visible glow in my first week. It absorbs fast and layers well.”`,
    name: 'Rienna Customer',
    badge: 'Verified Buyer',
  },
  {
    text: `“I love the cooling feel of ${products[1].name}. My under-eye looks fresher and less puffy.”`,
    name: 'Rienna Customer',
    badge: 'Verified Buyer',
  },
]

const Stars = () => (
  <div className="aqf-testimonial-ratting">
    {[1, 2, 3, 4, 5].map((i) => (
      <span key={i}>
        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
          <path
            d="M6.41531 0L8.19948 4.28974L12.8305 4.66101L9.30216 7.68349L10.3801 12.2027L6.41531 9.78094L2.45047 12.2027L3.52845 7.68349L0.000064373 4.66101L4.63113 4.28974L6.41531 0Z"
            fill="#FF9C05"
          />
        </svg>
      </span>
    ))}
  </div>
)

const TestimonialSlider = () => (
  <div className="aqf-testimonial-area pb-120 fix">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-8 col-lg-10">
          <div className="aqf-testimonial-slider p-relative">
            <div className="aqf-testimonial-arrow">
              <button className="aqf-testimonial-prev" type="button" aria-label="Previous slide">
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                    <path
                      d="M5.75 10.75L0.75 5.75L5.75 0.75"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </i>
              </button>
              <button className="aqf-testimonial-next" type="button" aria-label="Next slide">
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                    <path
                      d="M0.75 10.75L5.75 5.75L0.75 0.75"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </i>
              </button>
            </div>

            <div className="swiper aqf-testimonial-active">
              <div className="swiper-wrapper">
                {testimonials.map((t, idx) => (
                  <div className="swiper-slide" key={idx}>
                    <div className="aqf-testimonial-item text-center">
                      <span className="aqf-testimonial-quote">
                        <svg xmlns="http://www.w3.org/2000/svg" width="56" height="41" viewBox="0 0 56 41" fill="none">
                          <path
                            d="M25.4502 0.75V24.127L13.3496 38.54V23.6504H0.75V0.75H25.4502ZM54.8496 0.75V24.127L42.75 38.54V23.6504H30.1504V0.75H54.8496Z"
                            stroke="#000709"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </span>
                      <div className="aqf-testimonial-text">
                        <p>{t.text}</p>
                      </div>
                      <Stars />
                      <div className="aqf-testimonial-info">
                        <span>
                          {t.name} - {t.badge}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="aqf-testimonial-dot text-center mt-30" />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default TestimonialSlider

