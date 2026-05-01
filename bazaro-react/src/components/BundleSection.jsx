import RawSection from './RawSection'
import { getSectionHtml } from './templateSections'

const BundleSection = () => <RawSection html={getSectionHtml('bundle')} />

export default BundleSection
