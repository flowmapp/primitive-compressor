module.exports = {
  compressWireframePrimitive: wireframePrimitive => require('./compress')('wireframePrimitive', wireframePrimitive),
  decompressWireframePrimitive: wireframePrimitive => require('./decompress')('wireframePrimitive', wireframePrimitive),
  compressUserflowBlock: userflowBlock => require('./compress')('userflowBlock', userflowBlock),
}
