const makeDirectMapping = require('./makeDirectMapping')

module.exports = (array) => Object.fromEntries(array.map((value, index) => [index + 1, value]))
