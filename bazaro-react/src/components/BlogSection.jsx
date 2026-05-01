import RawSection from './RawSection'
import { getSectionHtml } from './templateSections'

const BlogSection = () => <RawSection html={getSectionHtml('blog')} />

export default BlogSection
