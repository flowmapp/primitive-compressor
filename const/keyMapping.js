const mapping = {
  backgroundColor: 'bc',
  borderRadius: 'br',
  color: 'c',
  positions: 'p',
  'positions.desktop': 'd',
  'positions.desktop.height': 'h',
  'positions.desktop.width': 'w',
  fileId: 'fId',
  fontWeight: 'fw',
  icon: 'i',
  placeholder: 'ph',
  sitemapPageId: 'spId',
  size: 's',
  state: 'st',
  title: 't',
  textAlign: 'ta',
}

module.exports = mapping

module.exports.reverse = Object.fromEntries(Object.entries(mapping).map(([key, value]) => [value, key.split('.').pop()]))
