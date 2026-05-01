import React, { useEffect } from 'react'
import html from '../original-index.html?raw'

const Template = () => {
  const body = (html.split(/<body[^>]*>/i)[1] || '').split(/<\/body>/i)[0] || ''

  useEffect(() => {
    // Inject external scripts referenced in the template so they execute.
    const tmp = document.createElement('div')
    tmp.innerHTML = body
    const scripts = Array.from(tmp.querySelectorAll('script'))
    scripts.forEach((s) => {
      const src = s.getAttribute('src')
      if (src) {
        const script = document.createElement('script')
        script.src = src.startsWith('http') ? src : `/${src.replace(/^\/?/, '')}`
        script.async = false
        document.body.appendChild(script)
      } else {
        // inline script
        const inline = document.createElement('script')
        inline.text = s.innerHTML
        document.body.appendChild(inline)
      }
    })

    return () => {
      // optionally cleanup injected scripts if needed
    }
  }, [])

  return <div dangerouslySetInnerHTML={{ __html: body }} />
}

export default Template
