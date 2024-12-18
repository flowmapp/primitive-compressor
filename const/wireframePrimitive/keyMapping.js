const mapping = {
  backgroundColor: 'bc',
  borderRadius: 'br',
  color: 'c',
  displayStyle: 'ds',
  fontWeight: 'fw',
  icon: 'i',
  isDisabled: 'di',
  opacity: 'o',
  placeholder: 'ph',
  points: 'po',
  isWidthFixed: 'iwf',
  positions: 'p',
  'positions.desktop': 'd',
  'positions.desktop.endX': 'ex',
  'positions.desktop.endY': 'ey',
  'positions.desktop.height': 'h',
  'positions.desktop.isWidthFixed': 'wf',
  'positions.desktop.width': 'w',
  sitemapPageId: 'spId',
  size: 's',
  title: 't',
  textAlign: 'ta',
  textDecoration: 'td',
}

module.exports = mapping

module.exports.reverse = Object.fromEntries(
  Object.entries(mapping).map(([key, value]) => [value, key.split('.').pop()]),
)
