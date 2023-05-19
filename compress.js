const keyMapping = require('./const/keyMapping')
const valueMapping = require('./const/valueMapping')
const defaultValues = require('./const/defaultValues')

module.exports = (_primitive) => {
  const primitive = JSON.parse(JSON.stringify(_primitive))

  const { settings, type } = primitive

  Object.entries(settings).forEach(([_key, _value]) => {
    if (typeof _value === 'undefined' || _value?.length === 0) {
      delete settings[_key]
      return
    }

    if (defaultValues[type][_key] === _value) {
      delete settings[_key]
      return
    }

    let value = valueMapping[_key] ? valueMapping[_key][_value] : _value
    if (typeof value === 'undefined') {
      throw new Error(`Unknown ${_key} ${_value}`)
    }
    settings[_key] = value
    if (_key === 'title') {
      value = value.replace(/[\n]+$/, '')
    }

    const key = keyMapping[_key]
    if (key) {
      settings[key] = value
      delete settings[_key]
    }
  })

  return primitive
}
