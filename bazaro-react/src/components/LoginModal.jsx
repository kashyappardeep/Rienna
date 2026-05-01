import RawSection from './RawSection'
import { getSectionHtml } from './templateSections'

const LoginModal = () => {
  return <RawSection html={getSectionHtml('loginModal')} />
}

export default LoginModal
