import RawSection from './RawSection'
import { getSectionHtml } from './templateSections'

const Footer = () => {
  const html = (getSectionHtml('footer') || '')
    .replaceAll('images/logo.png', 'images/logo1.png')
    .replaceAll('images/logo.svg', 'images/logo1.png')
    .replaceAll('images/logo.jpg', 'images/logo1.png')
    .replaceAll('images/logo.jpeg', 'images/logo1.png')
  return <RawSection html={html} />
}

export default Footer
