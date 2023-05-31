const mapping = {
  'left': 0,
  'center': 1,
  'right': 2,
}

module.exports = mapping

module.exports.reverse = Object.fromEntries(Object.entries(mapping).map(([key, value]) => [value, key]))
