const common = require('../../common/valueMapping')

const mapping = {
  ...common,
  align: require('./align'),
  borderColor: require('./borderColor'),
  figureType: require('./figureType'),
  textColor: require('./textColor'),
  textSize: require('./textSize'),
}

module.exports = mapping

module.exports.reverse = Object.fromEntries(Object.entries(mapping).map(([key, value]) => [value, key]))
