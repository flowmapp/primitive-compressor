const reverse = require('../../utils/reverse')

const mapping = {
  underline: 1,
}

module.exports = mapping

module.exports.reverse = reverse(mapping)
