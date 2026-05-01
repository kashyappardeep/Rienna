import html from '../original-index.html?raw'

const body = (html.split(/<body[^>]*>/i)[1] || '').split(/<\/body>/i)[0] || ''

const sectionMarkers = {
  preloader: ['<!-- pre loader area start -->', '<!-- offcanvas area start -->'],
  offcanvas: ['<!-- offcanvas area start -->', '<!-- header area start -->'],
  header: ['<!-- header area start -->', '<!-- slider area start -->'],
  slider: ['<!-- slider area start -->', '<!-- categories area start -->'],
  categories: ['<!-- categories area start -->', '<!-- stories area start -->'],
  stories: ['<!-- stories area start -->', '<!-- stories area end -->'],
  productArea1: ['<!-- product area start -->', '<!-- product area end -->'],
  banner: ['<!-- banner area start -->', '<!-- banner area end -->'],
  productArea2: ['<!-- product area start -->', '<!-- product area end -->'],
  bundle: ['<!-- outfit area start -->', '<!-- outfit area end -->'],
  blog: ['<!-- blog area start -->', '<!-- blog area end -->'],
  feature: ['<!-- feature area start -->', '<!-- feature area end -->'],
  footer: ['<!-- footer area start -->', '<!-- footer area end -->'],
}

export const getSectionHtml = (name) => {
  const markers = sectionMarkers[name]
  if (!markers) return ''

  let startIndex = body.indexOf(markers[0])
  
  // For sections with duplicate start markers, find the correct occurrence
  if (name === 'productArea2') {
    // Find the second occurrence of "product area start"
    const firstIndex = body.indexOf(markers[0])
    startIndex = body.indexOf(markers[0], firstIndex + markers[0].length)
  }
  
  // For sections with duplicate end markers, find the correct occurrence
  let endIndex
  if (name === 'productArea1') {
    // Find the first occurrence of "product area end"
    endIndex = body.indexOf(markers[1])
  } else if (name === 'productArea2') {
    // Find the second occurrence of "product area end"
    const firstIndex = body.indexOf(markers[1])
    endIndex = body.indexOf(markers[1], firstIndex + markers[1].length)
  } else {
    endIndex = body.indexOf(markers[1], startIndex + markers[0].length)
  }
  
  if (startIndex === -1 || endIndex === -1) return ''

  return body.slice(startIndex, endIndex)
}

export const getBodyScriptData = () => {
  if (typeof document === 'undefined') return []
  const tmp = document.createElement('div')
  tmp.innerHTML = body
  return Array.from(tmp.querySelectorAll('script')).map((script) => ({
    src: script.getAttribute('src'),
    inline: script.innerHTML,
  }))
}
