const mapping = {
  backgroundColor: 'bc',
  borderRadius: 'br',
  color: 'c',
  fontWeight: 'fw',
  icon: 'i',
  isDisabled: 'di',
  opacity: 'o',
  placeholder: 'ph',
  positions: 'p',
  'positions.desktop': 'd',
  'positions.desktop.endX': 'ex',
  'positions.desktop.endY': 'ey',
  'positions.desktop.height': 'h',
  'positions.desktop.isWidthFixed': 'wf',
  'positions.desktop.startX': 'sx',
  'positions.desktop.startY': 'xy',
  'positions.desktop.width': 'w',
  sitemapPageId: 'spId',
  size: 's',
  title: 't',
  textAlign: 'ta',
  textDecoration: 'td',
  width: 'w',
}

module.exports = mapping

module.exports.reverse = Object.fromEntries(
  Object.entries(mapping).map(([key, value]) => [value, key.split('.').pop()]),
)
