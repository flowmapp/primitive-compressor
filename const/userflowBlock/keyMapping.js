const mapping = {
  align: 'a',
  customSize: 'cs',
  backgroundColor: 'bc',
  borderColor: 'boC',
  dashArray: 'da',
  figureType: 'ft',
  icon: 'i',
  imageHeight: 'ih',
  imageWidth: 'iw',
  opacity: 'o',
  sitemapPageId: 'spId',
  textColor: 'tc',
  textSize: 'ts',
  title: 't',
}

module.exports = mapping

module.exports.reverse = Object.fromEntries(
  Object.entries(mapping).map(([key, value]) => [value, key.split('.').pop()]),
)
