const mapping = {
  xs: 9,
  s: 10,
  m: 20,
  l: 30,
  xl: 31,
}

module.exports = mapping

module.exports.reverse = Object.fromEntries(Object.entries(mapping).map(([key, value]) => [value, key]))
