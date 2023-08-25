const decompressMutateObject = require('./utils/decompressMutateObject')
const defaultValuesByEntity = require('./const/defaultValuesByEntity')

module.exports = (entityType, _entity) => {
  const entity = JSON.parse(JSON.stringify(_entity))

  const { params, type } = entity

  decompressMutateObject(params, entityType, type)

  const defaults = defaultValuesByEntity[entityType][type] || {}

  entity.params = { ...defaults, ...params }

  return entity
}
