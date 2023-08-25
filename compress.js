const compressMutateObject = require('./utils/compressMutateObject')

// TODO: frontend only needs decompress, backend only needs compress

module.exports = (entityType, _entity) => {
  const entity = JSON.parse(JSON.stringify(_entity))

  const { params, type } = entity

  compressMutateObject(params, entityType, type)

  return entity
}
