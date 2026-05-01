import RawSection from './RawSection'
import { getSectionHtml } from './templateSections'

const Banner = () => <RawSection html={getSectionHtml('banner')} />

export default Banner
