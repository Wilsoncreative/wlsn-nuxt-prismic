export default function (doc) {
  if (doc.isBroken) {
    return '/not-found'
  }

  if (doc.url) {
    if (doc.lang === 'sv-se') {
      return doc.url.replace('/sv-se', '')
    } else {
      return doc.url.replace('/en-us', '/en')
    }
  }

  return null
}
