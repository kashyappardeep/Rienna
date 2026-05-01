import RawSection from './RawSection'
import { getSectionHtml } from './templateSections'

const Preloader = () => {
  const html = (getSectionHtml('preloader') || '')
    .replaceAll('Bazaro', 'RIENNA')
    .replaceAll('images/favicon.png', 'images/loading1.png')
    .replaceAll('images/logo.png', 'images/loading1.png')
    .replaceAll('images/logo.svg', 'images/loading1.png')
    .replaceAll('images/logo.jpg', 'images/loading1.png')
    .replaceAll('images/logo.jpeg', 'images/loading1.png')
    .replaceAll(
      '<img src="images/loading1.png" alt="">',
      '<img class="aq-preloader-center-logo" src="images/loading1.png" alt="RIENNA logo">'
    )
    .replace(/<h3 class="aq-preloader-title">[\s\S]*?<\/h3>/, '')
    .replace(/<p class="aq-preloader-subtitle">[\s\S]*?<\/p>/, '')
  return <RawSection html={html} />
}

export default Preloader
