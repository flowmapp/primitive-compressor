const mapping = {
  500: 5,
  600: 6,
  700: 7,
  800: 8,
}

module.exports = mapping

module.exports.reverse = Object.fromEntries(Object.entries(mapping).map(([key, value]) => [value, key]))
