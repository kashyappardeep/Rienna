import RawSection from './RawSection'
import { getSectionHtml } from './templateSections'

const Offcanvas = () => {
  const html = (getSectionHtml('offcanvas') || '')
    .replaceAll('images/logo.png', 'images/logo1.png')
    .replaceAll('images/logo.svg', 'images/logo1.png')
    .replaceAll('images/logo.jpg', 'images/logo1.png')
    .replaceAll('images/logo.jpeg', 'images/logo1.png')
    .replace(/<li>\s*<a href="store\.html">Our Store<\/a>\s*<\/li>/g, '')
    .replace(/<li>\s*<a href="vendor-stores\.html">Vendor<\/a>\s*<\/li>/g, '')
    .replace(/<li>\s*<a href="vendor-details\.html">Vendor Details<\/a>\s*<\/li>/g, '')
    .replace(/<li>\s*<a href="privacy-policy\.html">Terms of use<\/a>\s*<\/li>/g, '')
    .replace(/<li>\s*<a href="error\.html">404 Page<\/a>\s*<\/li>/g, '')
    .replace(/<li>\s*<a href="comming-soon\.html">Coming Soon<\/a>\s*<\/li>/g, '')
  return <RawSection html={html} />
}

export default Offcanvas
