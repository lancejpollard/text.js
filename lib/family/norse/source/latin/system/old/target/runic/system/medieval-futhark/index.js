
const tools = require('../../../../../../../../../../framework/tools')

/**
 * Expose module.
 */

module.exports = transform

/**
 * Old Norse to ULA map.
 */

const m = {
  'a': 'ᛆ',
  'á': 'ᛆ',
  'ǫ': 'ᛆ',
  'b': 'ᛒ',
  'c': 'ᛍ',
  'd': 'ᛑ',
  'ð': 'ᚧ',
  'e': 'ᛂ',
  'é': 'ᛂ',
  'f': 'ᚠ',
  'g': 'ᚵ',
  'h': 'ᚼ',
  'í': 'ᛁ',
  'i': 'ᛁ',
  'j': 'ᛦ',
  'k': 'ᚴ',
  'l': 'ᛚ',
  'm': 'ᛘ',
  'n': 'ᚿ',
  'o': 'ᚮ',
  'ó': 'ᚮ',
  'p': 'ᛔ',
  'q': 'ᛩ',
  'r': 'ᚱ',
  's': 'ᛋ',
  't': 'ᛐ',
  'u': 'ᚢ',
  'v': 'ᚡ',
  'w': 'ᚥ',
  'x': 'ᛪ',
  'y': 'ᛦ',
  'ý': 'ᛦ',
  'z': 'ᛎ',
  'þ': 'ᚦ',
  'æ': 'ᛅ',
  'ä': 'ᛅ',
  'ø': 'ᚯ',
  'ö': 'ᚯ',
  'œ': 'ᚯ',

  ' ': ' ',
  '\n': '\n',
  ',': '᛫',
  '.': '᛭',
  ':': '',
  ';': '',
  "'": '',
  '"': '',
  '!': '᛭',
  '?': '᛭'
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
