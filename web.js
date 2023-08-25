module.exports = {
  decompressWireframePrimitive: wireframePrimitive => require('./decompress')('wireframePrimitive', wireframePrimitive),
  decompressUserflowBlock: userflowBlock => require('./decompress')('userflowBlock', userflowBlock),
}
