const makeDirectMapping = require('./makeDirectMapping')
const makeReverseMapping = require('./makeReverseMapping')

module.exports = array => ({
  direct: makeDirectMapping(array),
  reverse: makeReverseMapping(array),
})
