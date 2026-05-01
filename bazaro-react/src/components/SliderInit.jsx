import { useEffect } from 'react'

const SliderInit = () => {
  useEffect(() => {
    // Apply background colors from data-bg-color attributes
    if (typeof window !== 'undefined' && typeof $ !== 'undefined') {
      $('[data-bg-color]').each(function () {
        $(this).css('background-color', $(this).attr('data-bg-color'))
      })

      $('[data-text-color]').each(function () {
        $(this).css('color', $(this).attr('data-text-color'))
      })

      // Initialize dropdown menus
      $('.aq-header-dropdown nav ul li').each(function () {
        if ($(this).find('.mega-menu').length > 0) {
          $(this).addClass('p-static')
        }
      })

      // Initialize dropdown toggle on click
      $('.aq-header-dropdown nav ul li.has-dropdown > a').on('click', function (e) {
        e.preventDefault()
        const $li = $(this).closest('li')
        const isActive = $li.hasClass('active')
        
        // Close all other dropdowns
        $('.aq-header-dropdown nav ul li.has-dropdown').removeClass('active')
        $('.aq-header-dropdown nav ul li.has-dropdown .mega-menu, .aq-header-dropdown nav ul li.has-dropdown .submenu').css({
          'opacity': '0',
          'visibility': 'hidden'
        })
        
        // Toggle current dropdown
        if (!isActive) {
          $li.addClass('active')
          $li.find('.mega-menu, .submenu').css({
            'opacity': '1',
            'visibility': 'visible'
          })
        }
      })

      // Close dropdowns when clicking outside
      $(document).on('click', function (e) {
        if (!$(e.target).closest('.aq-header-dropdown nav ul li.has-dropdown').length) {
          $('.aq-header-dropdown nav ul li.has-dropdown').removeClass('active')
          $('.aq-header-dropdown nav ul li.has-dropdown .mega-menu, .aq-header-dropdown nav ul li.has-dropdown .submenu').css({
            'opacity': '0',
            'visibility': 'hidden'
          })
        }
      })

      // Initialize slider if slider-active.js is loaded
      if (typeof Swiper !== 'undefined') {
        // Re-initialize main slider
        const mainSliders = document.querySelectorAll('.aqf-slider-active')
        mainSliders.forEach(slider => {
          if (!slider.swiper) {
            new Swiper(slider, {
              slidesPerView: 1,
              loop: true,
              spaceBetween: 0,
              effect: 'fade',
              autoplay: {
                delay: 5000,
                disableOnInteraction: false,
              },
              navigation: {
                prevEl: '.aqf-slider-prev',
                nextEl: '.aqf-slider-next',
              },
              pagination: {
                el: '.aqf-slider-dot',
                clickable: true,
              },
            })
          }
        })

        // Initialize product slider (Flash Deals)
        const productSliders = document.querySelectorAll('.aq-product-active')
        productSliders.forEach(slider => {
          if (!slider.swiper) {
            new Swiper(slider, {
              slidesPerView: 4,
              loop: true,
              spaceBetween: 30,
              navigation: {
                prevEl: '.aq-product-prev',
                nextEl: '.aq-product-next',
              },
              breakpoints: {
                1200: {
                  slidesPerView: 4,
                },
                992: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 2,
                },
                576: {
                  slidesPerView: 2,
                },
                0: {
                  slidesPerView: 1,
                },
              },
            })
          }
        })
      }
    }
  }, [])

  return null
}

export default SliderInit
