module.exports = {
  compressWireframePrimitive: wireframePrimitive => require('./compress')('wireframePrimitive', wireframePrimitive),
  compressUserflowBlock: userflowBlock => require('./compress')('userflowBlock', userflowBlock),
  decompressUserflowBlock: userflowBlock => require('./decompress')('userflowBlock', userflowBlock),
}
