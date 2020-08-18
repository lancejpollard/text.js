
const tools = require('../../tools')

/**
 * Expose module.
 */

module.exports = transform

/**
 * Old Irish to ULA map.
 */

const m = {
  ' ': ' ',
  '\n': '\n',
  ',': ',',
  '.': '.',
  ':': '',
  ';': '',
  "'": '',
  '"': '',
  '!': '.',
  '?': '.'
}

/**
 * Build trie.
 */

const s = tools.build(m)

/**
 * Transform the text.
 */

function transform(i) {
  return tools.transform(i, s, m)
}
