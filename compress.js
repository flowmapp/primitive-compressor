const keyMapping = require('./const/keyMapping')
const valueMapping = require('./const/valueMapping')
const defaultValues = require('./const/defaultValues')

const compressMutateObject = (object, type, keyPath = '') => {
  Object.entries(object).forEach(([_key, _value]) => {
    if (typeof _value === 'undefined' || _value?.length === 0) {
      delete object[_key]
      return
    }

    if (!keyPath.length) {
      if (defaultValues[type][_key] === _value) {
        delete object[_key]
        return
      }
    }

    let value = valueMapping[_key] ? valueMapping[_key][_value] : _value
    if (typeof value === 'undefined') {
      throw new Error(`Unknown ${_key} ${_value}`)
    }
    object[_key] = value
    if (_key === 'title') {
      value = value.replace(/[\n]+$/, '')
    }

    const key = keyPath === '' ? keyMapping[_key] : keyMapping[`${keyPath}.${_key}`]
    if (key) {
      object[key] = value
      delete object[_key]
    }

    if (typeof _value === 'object') {
      compressMutateObject(value, type, `${keyPath}.${_key}`.replace(/^\./, ''))
    }
  })
}

module.exports = (_primitive) => {
  const primitive = JSON.parse(JSON.stringify(_primitive))

  const { settings, type } = primitive

  compressMutateObject(settings, type)

  return primitive
}
