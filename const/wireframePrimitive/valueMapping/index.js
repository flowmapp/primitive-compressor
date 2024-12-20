const common = require('../../common/valueMapping')

const mapping = {
  ...common,
  backgroundColor: require('./backgroundColor'),
  color: require('./color'),
  fontWeight: require('./fontWeight'),
  size: require('./size'),
  state: require('./state'),
  textAlign: require('./textAlign'),
  textDecoration: require('./textDecoration'),
}

module.exports = mapping

module.exports.reverse = Object.fromEntries(Object.entries(mapping).map(([key, value]) => [value, key]))
