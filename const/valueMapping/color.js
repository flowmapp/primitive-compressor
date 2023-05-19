const mapping = {
  primary: 0,
  surfaceVariant: 1,
}

module.exports = mapping

module.exports.reverse = Object.fromEntries(Object.entries(mapping).map(([key, value]) => [value, key]))
