const reverse = require('../../utils/reverse')

const mapping = {
  primary: 'p',
  surfaceVariant: 's',
  '#999': 9,
}

module.exports = mapping

module.exports.reverse = reverse(mapping)
