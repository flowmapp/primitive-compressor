const decompressMutateObject = require('./utils/decompressMutateObject')

module.exports = (entityType, _entity) => {
  const entity = JSON.parse(JSON.stringify(_entity))

  const { params, type } = entity

  decompressMutateObject(params, entityType, type)

  return entity
}
