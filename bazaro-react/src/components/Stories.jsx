import RawSection from './RawSection'
import { getSectionHtml } from './templateSections'

const Stories = () => <RawSection html={getSectionHtml('stories')} />

export default Stories
