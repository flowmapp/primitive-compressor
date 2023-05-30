const mapping = {
  backgroundColor: 'bc',
  borderRadius: 'br',
  color: 'c',
  desktopPosition: 'dp',
  fileId: 'fId',
  fontWeight: 'fw',
  icon: 'i',
  placeholder: 'ph',
  sitemapPageId: 'spId',
  size: 's',
  state: 'st',
  title: 't',
}

module.exports = mapping

module.exports.reverse = Object.fromEntries(Object.entries(mapping).map(([key, value]) => [value, key]))
