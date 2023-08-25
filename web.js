module.exports = {
  decompressWireframePrimitive: primitive => require('./decompress')('wireframePrimitive', entity),
  decompressUserflowBlock: primitive => require('./decompress')('userflowBlock', entity),
}
