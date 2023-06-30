const makeDirectMapping = require('./makeDirectMapping')

module.exports = (array) =>
  Object.fromEntries(Object.entries(makeDirectMapping(array)).map(([key, value]) => [value, key]))
