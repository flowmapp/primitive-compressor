module.exports = object => Object.fromEntries(Object.entries(object).map(([key, value]) => [value, key]))
