const keyMapping = require('./const/keyMapping')
const valueMapping = require('./const/valueMapping')
const defaultValues = require('./const/defaultValues')

const decompressMutateObject = (object, keyPath = '') => {
  Object.entries(object).forEach(([_key, _value]) => {
    const key = keyMapping.reverse[_key] || _key
    const value = valueMapping[key]?.reverse?.[_value] || _value
    object[key] = value
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

  const { params, type } = primitive

  decompressMutateObject(params)

  const defaults = defaultValues[type] || {}

  primitive.params = { ...defaults, ...params }

  return primitive
}
