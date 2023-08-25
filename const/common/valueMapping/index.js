const mapping = {
  icon: require('./icon'),
  opacity: require('./opacity'),
}

module.exports = mapping

module.exports.reverse = Object.fromEntries(Object.entries(mapping).map(([key, value]) => [value, key]))
