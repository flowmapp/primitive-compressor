const mapping = {
  backgroundColor: 'bc',
  borderRadius: 'br',
  color: 'c',
  positions: 'p',
  'positions.desktop': 'd',
  'positions.desktop.endX': 'ex',
  'positions.desktop.endY': 'ey',
  'positions.desktop.height': 'h',
  'positions.desktop.startX': 'sx',
  'positions.desktop.startY': 'xy',
  'positions.desktop.width': 'w',
  'positions.desktop.isWidthFixed': 'wf',
  fileId: 'fId',
  fontWeight: 'fw',
  icon: 'i',
  placeholder: 'ph',
  opacity: 'o',
  sitemapPageId: 'spId',
  size: 's',
  title: 't',
  textAlign: 'ta',
  textDecoration: 'td',
}

module.exports = mapping

module.exports.reverse = Object.fromEntries(Object.entries(mapping).map(([key, value]) => [value, key.split('.').pop()]))
