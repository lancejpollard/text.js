
const tools = require('../../../../../../../../../../framework/tools')

/**
 * Expose module.
 */

module.exports = transform

/**
 * Old Norse to ULA map.
 */

const m = {
  'ei': 'ại',
  'ey': 'e̤i̤',
  'au': 'a̬u',
  'í': 'ȋ',
  'i': 'i',
  'é': 'ȇ',
  'e': 'e',
  'ę': 'ạ',
  'æ': 'ạạ',
  'ý': 'ȋ̤',
  'y': 'i̤',
  'ø': 'e̤',
  'œ': 'e̤e̤',
  'u': 'u',
  'ó': 'ȏ',
  'ö': 'e̤e̤',
  'o': 'o',
  'á': 'ȃ',
  'a': 'a',
  'ǫ': 'a̬',
  'p': 'p',
  'b': 'b',
  'm': 'm',
  'f': 'f',
  'þ': 'c',
  'ð': 'c̣',
  't': 't',
  'd': 'd',
  'n': 'n',
  'l': 'l',
  's': 's',
  'r': 'ŕŕ',
  'j': 'y',
  'v': 'w',
  'ƿ': 'w',
  'k': 'k',
  'g': 'g',
  'h': 'h',
  'z': 'ts',
  'x': 'ks',

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
