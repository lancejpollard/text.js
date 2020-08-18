
const tools = require('../../../framework/tools')

/**
 * Expose module.
 */

module.exports = transform

/**
 * Navajo to ULA map.
 */

const m = {
  "’": "'",
  "´" : "'",
  'ą́ą́': 'ã́ã́',
  'áá': 'áá',
  'ąą': 'ãã',
  'aa': 'aa',
  'ą́': 'ã́',
  'á': 'á',
  'ą': 'ã',
  'a': 'a',
  'b': 'p',
  'ch': 'txh',
  'ch’': 't̖x',
  'chʼ': 't̖x',
  'dl': 'tl',
  'dz': 'ts',
  'd': 't',
  'ę́ę́': 'ẽ́ẽ́',
  'éé': 'éé',
  'ęę': 'ẽẽ',
  'ee': 'ee',
  'ę́': 'ẽ́',
  'é': 'é',
  'ę': 'ẽ',
  'e': 'e',
  'gh': 'g̈',
  'g': 'k',
  'hw': 'xw',
  'h': 'h',
  'į́į́': 'ị̃́ị̃́',
  'íí': 'ị́ị́',
  'įį': 'ị̃ị̃',
  'ii': 'ịị',
  'į́': 'ị̃́',
  'í': 'ị́',
  'į': 'ị̃',
  'i': 'ị',
  'j': 'tx',
  'kw': 'kxw',
  'k’': 'k̖',
  'kʼ': 'k̖',
  'k': 'kx',
  'ł': 's̤',
  'l': 'l',
  'm': 'm',
  'ń': 'ń',
  'n': 'n',
  'ǫ́ǫ́': 'ṍṍ',
  'óó': 'óó',
  'ǫǫ': 'õõ',
  'oo': 'oo',
  'o': 'o',
  'ǫ́': 'ṍ',
  'ó': 'ó',
  'ǫ': 'õ',
  'sh': 'x',
  's': 's',
  'tł’': 't̖s̤',
  'tł': 'ts̤h',
  'ts’': 't̖s',
  'tsʼ': 't̖s',
  'ts': 'tsh',
  't’': 't̖',
  'tʼ': 't̖',
  't': 'tx',
  'w': 'w',
  'x': 'h̤',
  'y': 'y',
  'zh': 'j',
  'z': 'z',

  ' ': ' ',
  '\n': '\n',
  ',': ',',
  '.': '.',
  ':': ':',
  ';': ';',
  "'": "'",
  '"': '"',
  '!': '!',
  '?': '?',
  'ʼ': "'"
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
