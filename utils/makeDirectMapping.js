module.exports = (array) => Object.fromEntries(array.map((value, index) => [value, index + 1]))
