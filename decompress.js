const keyMapping = require('./const/keyMapping')
const valueMapping = require('./const/valueMapping')
const defaultValues = require('./const/defaultValues')

const decompressMutateObject = (object, keyPath = '') => {
  Object.entries(object).forEach(([_key, _value]) => {
    const key = keyMapping.reverse[_key] || _key
    const value = valueMapping.reverse[_key]?.[_value] || _value
    object[key] = _value
    if (key !== _key) {
      delete object[_key]
    }
    if (typeof value === 'object') {
      decompressMutateObject(value, `${keyPath}.${_key}`.replace(/^\./, ''))
    }
  })
}

module.exports = (_primitive) => {
  const primitive = JSON.parse(JSON.stringify(_primitive))

  const { settings, type } = primitive

  decompressMutateObject(settings)

  const defaults = defaultValues[type] || {}

  primitive.settings = { ...defaults, ...settings }

  return primitive
}
