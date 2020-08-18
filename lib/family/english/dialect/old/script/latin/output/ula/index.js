
// https://en.wikipedia.org/wiki/Old_English_phonology

const tools = require('../../../../../../../../framework/tools')

/**
 * Expose module.
 */

module.exports = transform

/**
 * Old English to ULA map.
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
