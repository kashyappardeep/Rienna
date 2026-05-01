import RawSection from './RawSection'
import { getSectionHtml } from './templateSections'

const FeatureSection = () => <RawSection html={getSectionHtml('feature')} />

export default FeatureSection
