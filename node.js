module.exports = {
  compressWireframePrimitive: primitive => require('./compress')('wireframePrimitive', entity),
  compressUserflowBlock: primitive => require('./compress')('userflowBlock', entity),
}
