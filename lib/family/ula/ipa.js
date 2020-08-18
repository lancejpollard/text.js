
const tools = require('../../tools')

/**
 * Expose module.
 */

module.exports = transform

/**
 * Arabic to ULA map.
 */

/**
 * Maps ULA to IPA.
 */

const m = {
  "i": 'i',
  "e": 'e',
  "a": 'a',
  "o": 'o',
  "u": 'u',
  "ị": 'ɪ',
  "ẹ": 'ɛ',
  "ạ": 'æ',
  "ọ": 'ə',
  "ụ": 'ʊ',
  "i̤": 'y',
  "e̤": 'ø',
  "a̤": 'ɔ',
  "o̤": 'ɤ',
  "ṳ": 'ü',
  "a̬": 'ɒ',
  "m": 'm',
  "ṃ": 'ɱ',
  "n": 'n',
  "ṇ": 'ɳ',
  "q": 'ŋ',
  "q̇": 'ɴ',
  "q̈": 'ɰ',
  "g": 'ɡ',
  "ġ": 'ɢ',
  "g̀": 'ɠ',
  "g̏": 'ʛ',
  "g̈": 'ɣ',
  "gg": 'ʢ',
  "d": 'd',
  "ḍ": 'ɖ',
  "d̗": 'ɗ',
  "d̬": 'ǂ',
  "b": 'b',
  "ḅ": 'ⱱ',
  "bb": 'ʙ',
  "b̗": 'ɓ',
  "b̖": 'bʼ',
  "p": 'p',
  "ṕ": 'pʼ',
  "p̂": 'ʘ',
  "t": 't',
  "ṭ": 'ʈ',
  "t̬": 'ǀ',
  "k": 'k',
  "k̬": 'ǃ',
  "ḳ": 'c',
  "k̤": 'q',
  "h": 'h',
  "ḥ": 'ħ',
  "h̤": 'x',
  "ẖ": 'ɦ',
  "ḥḥ": 'ʜ',
  "h̤h̤": 'χ',
  "s": 's',
  "ṣ": 'ç',
  "s̤": 'ɬ',
  "f": 'f',
  "f̤": 'ɸ',
  "v": 'v',
  "ṿ": 'β',
  "v̤": 'ʋ',
  "z": 'z',
  "ẓ": 'ʐ',
  "z̤": 'ʑ',
  "c": 'θ',
  "c̣": 'ð',
  "j": 'ʒ',
  "l": 'l',
  "ḷ": 'ɭ',
  "l̤": 'ʟ',
  "l̬": 'ɮ',
  "l̬": 'ǁ',
  "r": 'ɹ',
  "ṛ": 'ɻ',
  "ŕ": 'ɾ',
  "ṛ́": 'ɽ',
  "r̤": 'ʁ',
  "ŕŕ": 'r',
  "r̤r̤": 'ʀ',
  "x": 'ʃ',
  "x̣": 'ʂ',
  "x̤": 'ɕ',
  "w": 'w',
  "y": 'j',
  "ẏ": 'ʝ',
  "'": 'ʡ',
  "yw": 'ɥ',
  "ny": 'ɲ',

  '\u0311': s => s[s.length - 1] = 'ˈ' + s[s.length - 1],
  ' ': ' ',
  '\n': '\n',
  ',': ',',
  '.': '.',
  ':': ':',
  ';': ';',
  "'": "'",
  '"': '"',
  '!': '!',
  '?': '?'
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