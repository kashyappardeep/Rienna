import { memo, useMemo } from 'react'

const routeMap = {
  'index.html': '/',
  '/index.html': '/',
  'contact.html': '/?page=contact',
  '/contact.html': '/?page=contact',
  'checkout.html': '/?page=checkout',
  '/checkout.html': '/?page=checkout',
  'product-details-default.html': '/?page=product-details&product=day-cream',
  '/product-details-default.html': '/?page=product-details&product=day-cream',
  'product-default.html': '/#rienna-products',
  '/product-default.html': '/#rienna-products',
  'product-all-categories.html': '/#rienna-products',
  '/product-all-categories.html': '/#rienna-products',
  'categories.html': '/#rienna-products',
  '/categories.html': '/#rienna-products',
  'wishlist.html': '/#rienna-products',
  '/wishlist.html': '/#rienna-products',
  'product-offer-page.html': '/#rienna-products',
  '/product-offer-page.html': '/#rienna-products',
}

const rewriteTemplateLinks = (html) => {
  if (!html) return ''
  return html.replace(/href=(['"])(.*?)\1/g, (fullMatch, quote, value) => {
    const trimmedValue = String(value).trim()
    if (!trimmedValue) return fullMatch
    if (
      trimmedValue.startsWith('#') ||
      trimmedValue.startsWith('mailto:') ||
      trimmedValue.startsWith('tel:') ||
      trimmedValue.startsWith('http') ||
      trimmedValue.startsWith('javascript:')
    ) {
      return fullMatch
    }

    const mapped = routeMap[trimmedValue]
    if (!mapped) return fullMatch
    return `href=${quote}${mapped}${quote}`
  })
}

const RawSection = ({ html }) => {
  if (!html) return null
  const safeHtml = useMemo(() => rewriteTemplateLinks(html), [html])
  return <div dangerouslySetInnerHTML={{ __html: safeHtml }} />
}

export default memo(RawSection, (prevProps, nextProps) => prevProps.html === nextProps.html)
