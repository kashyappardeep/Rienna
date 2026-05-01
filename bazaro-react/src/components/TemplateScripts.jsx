import { useEffect } from 'react'

const scriptFiles = [
  'js/jquery.js',
  'js/bootstrap-bundle.js',
  'js/swiper-bundle.js',
  'js/magnific-popup.js',
  'js/nice-select.js',
  'js/purecounter.js',
  'js/isotope-pkgd.js',
  'js/lazysize.min.js',
  'js/slider-active.js',
  'js/imagesloaded-pkgd.js',
  'js/ajax-form.js',
  'js/main.js',
]

const TemplateScripts = () => {
  useEffect(() => {
    const added = []
    scriptFiles.forEach((src) => {
      if (document.querySelector(`script[src="/${src}"]`)) return
      const script = document.createElement('script')
      script.src = `/${src}`
      script.async = false
      document.body.appendChild(script)
      added.push(script)
    })

    return () => {
      added.forEach((script) => {
        if (script.parentElement) script.parentElement.removeChild(script)
      })
    }
  }, [])

  return null
}

export default TemplateScripts
