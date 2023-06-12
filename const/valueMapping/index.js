const mapping = {
  color: require('./color'),
  fontWeight: require('./fontWeight'),
  icon: require('./icon'),
  size: require('./size'),
  state: require('./state'),
  textAlign: require('./textAlign'),
  textDecoration: require('./textDecoration'),
}

module.exports = mapping

module.exports.reverse = Object.fromEntries(Object.entries(mapping).map(([key, value]) => [value, key]))
