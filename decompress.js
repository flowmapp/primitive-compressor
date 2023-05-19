const keyMapping = require('./const/keyMapping')
const valueMapping = require('./const/valueMapping')
const defaultValues = require('./const/defaultValues')

module.exports = (_primitive) => {
  const primitive = JSON.parse(JSON.stringify(_primitive))

  const { settings: compressedSettings, type } = primitive

  const settings = {}

  Object.entries(compressedSettings).forEach(([_key, _value]) => {
    const key = keyMapping.reverse[_key] || _key
    const value = valueMapping.reverse[_key]?.[_value] || _value
    settings[key] = _value
  })

  const defaults = defaultValues[type] || {}

  primitive.settings = { ...defaults, ...settings }

  return primitive
}
