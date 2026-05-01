import RawSection from './RawSection'
import { getSectionHtml } from './templateSections'

const Header = () => {
  const html = (getSectionHtml('header') || '')
    .replaceAll('href="contact.html"', 'href="/?page=contact"')
    .replaceAll("href='contact.html'", "href='/?page=contact'")
    .replaceAll('href="dashboard.html"', 'href="/?page=dashboard"')
    .replaceAll("href='dashboard.html'", "href='/?page=dashboard'")
    .replaceAll('href="login.html"', 'href="#"')
    .replaceAll("href='login.html'", "href='#'")
    .replaceAll('images/logo.png', 'images/logo1.png')
    .replaceAll('images/logo.svg', 'images/logo1.png')
    .replaceAll('images/logo.jpg', 'images/logo1.png')
    .replaceAll('images/logo.jpeg', 'images/logo1.png')

  // Move header logo to the left
  let modifiedHtml = html.replace(
    'class="aq-header-logo text-center text-xl-start"',
    'class="aq-header-logo text-start"'
  )

  // Keep a simple top nav with the requested menu labels.
  modifiedHtml = modifiedHtml.replace(
    /(<nav class="aq-mobile-menu-active">\s*<ul>)[\s\S]*?(<\/ul>\s*<\/nav>)/,
    `$1
      <li><a href="/">Home</a></li>
      <li><a href="product-details-default.html">Products</a></li>
      <li><a href="/?page=contact">Contact</a></li>
    $2`
  )

  // Add dashboard icon next to account icon
  const dashboardIconHtml = `<li class="aq-header-top-dashboard d-none d-md-inline-block">
                           <a href="/?page=dashboard">
                              <i>
                                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                    <rect x="3" y="3" width="7" height="7"></rect>
                                    <rect x="14" y="3" width="7" height="7"></rect>
                                    <rect x="14" y="14" width="7" height="7"></rect>
                                    <rect x="3" y="14" width="7" height="7"></rect>
                                 </svg>
                              </i>
                           </a>
                        </li>`

  // Insert dashboard icon after account icon closes
  modifiedHtml = modifiedHtml.replace(
    /(<li class="aq-header-top-account d-none d-md-inline-block">[\s\S]*?<\/li>)(\s*<li class="aq-header-top-wishlist)/,
    `$1${dashboardIconHtml}$2`
  )

  return <RawSection html={modifiedHtml} />
}

export default Header
