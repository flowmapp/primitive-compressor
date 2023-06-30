const reverse = require('../../utils/reverse')

const mapping = {
  left: 1,
  center: 2,
  right: 3,
}

module.exports = mapping

module.exports.reverse = reverse(mapping)
