const keyMappingByEntity = require('../const/keyMappingByEntity')
const valueMappingByEntity = require('../const/valueMappingByEntity')

const decompressMutateObject = (object, entity, type, keyPath = '') => {
  if (object === null) {
    return
  }

  const keyMapping = keyMappingByEntity[entity]
  const valueMapping = valueMappingByEntity[entity]

  Object.entries(object).forEach(([_key, _value]) => {
    const key = keyMapping.reverse[_key] || _key
    const value = valueMapping[key]?.reverse?.[_value] || _value
    object[key] = value
    if (key !== _key) {
      delete object[_key]
    }
    if (typeof value === 'object') {
      decompressMutateObject(value, entity, type, `${keyPath}.${_key}`.replace(/^\./, ''))
    }
  })
}

module.exports = decompressMutateObject
