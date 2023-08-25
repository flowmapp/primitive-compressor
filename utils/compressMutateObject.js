const keyMappingByEntity = require('../const/keyMappingByEntity')
const valueMappingByEntity = require('../const/valueMappingByEntity')
const defaultValuesByEntity = require('../const/defaultValuesByEntity')

const compressMutateObject = (object, entity, type, keyPath = '') => {
  const keyMapping = keyMappingByEntity[entity]
  const valueMapping = valueMappingByEntity[entity]
  const defaultValues = defaultValuesByEntity[entity]

  Object.entries(object).forEach(([_key, _value]) => {
    if (typeof _value === 'undefined' || _value === null || _value?.length === 0) {
      delete object[_key]
      return
    }

    if (!keyPath.length) {
      if (defaultValues[type]?.[_key] === _value) {
        delete object[_key]
        return
      }
    }

    let value = valueMapping[_key]?.direct?.[_value] || _value
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
      compressMutateObject(value, entity, type, `${keyPath}.${_key}`.replace(/^\./, ''))
    }
  })
}

module.exports = compressMutateObject
