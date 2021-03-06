
const tools = require('../../tools')

/**
 * Expose module.
 */

module.exports = transform

/**
 * Arabic to ULA map.
 */

const m = {
  'ء': "'",

  'ا': 'aa',
  'ﺍ': 'aa',
  'ﺎ': 'aa',

  'ب': 'b',
  'ﺏ': 'b',
  'ﺐ': 'b',
  'ﺒ': 'b',
  'ﺑ': 'b',

  'ت': 't',
  'ﺕ': 't',
  'ﺖ': 't',
  'ﺘ': 't',
  'ﺗ': 't',

  'ث': 'c',
  'ﺙ': 'c',
  'ﺚ': 'c',
  'ﺜ': 'c',
  'ﺛ': 'c',

  'ج': 'dj',
  'ﺝ': 'dj',
  'ﺞ': 'dj',
  'ﺠ': 'dj',
  'ﺟ': 'dj',

  'ح': 'ḥ',
  'ﺡ': 'ḥ',
  'ﺢ': 'ḥ',
  'ﺤ': 'ḥ',
  'ﺣ': 'ḥ',

  'خ': 'h̤',
  'ﺥ': 'h̤',
  'ﺦ': 'h̤',
  'ﺨ': 'h̤',
  'ﺧ': 'h̤',

  'د': 'd',
  'ﺩ': 'd',
  'ﺪ': 'd',

  'ذ': 'c̣',
  'ﺫ': 'c̣',
  'ﺬ': 'c̣',

  'ر': 'r̂',
  'ﺭ': 'r̂',
  'ﺮ': 'r̂',

  'ز': 'z',
  'ﺯ': 'z',
  'ﺰ': 'z',

  'س': 's',
  'ﺱ': 's',
  'ﺲ': 's',
  'ﺴ': 's',
  'ﺳ': 's',

  'ش': 'x',
  'ﺵ': 'x',
  'ﺶ': 'x',
  'ﺸ': 'x',
  'ﺷ': 'x',

  'ص': "s'",
  'ﺹ': "s'",
  'ﺺ': "s'",
  'ﺼ': "s'",
  'ﺻ': "s'",

  'ض': "d'",
  'ﺽ': "d'",
  'ﺾ': "d'",
  'ﻀ': "d'",
  'ﺿ': "d'",

  'ط': "t'",
  'ﻁ': "t'",
  'ﻂ': "t'",
  'ﻄ': "t'",
  'ﻃ': "t'",

  'ظ': 'c̣',
  'ﻅ': 'c̣',
  'ﻆ': 'c̣',
  'ﻈ': 'c̣',
  'ﻇ': 'c̣',

  'ع': "'",
  'ﻉ': "'",
  'ﻊ': "'",
  'ﻌ': "'",
  'ﻋ': "'",

  'غ': 'ṙ',
  'ﻍ': 'ṙ',
  'ﻎ': 'ṙ',
  'ﻐ': 'ṙ',
  'ﻏ': 'ṙ',

  'ف': 'f',
  'ﻑ': 'f',
  'ﻒ': 'f',
  'ﻔ': 'f',
  'ﻓ': 'f',

  'ق': 'k̤',
  'ﻕ': 'k̤',
  'ﻖ': 'k̤',
  'ﻘ': 'k̤',
  'ﻗ': 'k̤',

  'ك': 'k',
  'ﻙ': 'k',
  'ﻚ': 'k',
  'ﻜ': 'k',
  'ﻛ': 'k',

  'ل': 'l',
  'ﻝ': 'l',
  'ﻞ': 'l',
  'ﻠ': 'l',
  'ﻟ': 'l',

  'م': 'm',
  'ﻡ': 'm',
  'ﻢ': 'm',
  'ﻤ': 'm',
  'ﻣ': 'm',

  'ن': 'n',
  'ﻥ': 'n',
  'ﻦ': 'n',
  'ﻨ': 'n',
  'ﻧ': 'n',

  'ه': 'h',
  'ﻩ': 'h',
  'ﻪ': 'h',
  'ﻬ': 'h',
  'ﻫ': 'h',

  'و': 'w',
  'ﻭ': 'w',
  'ﻮ': 'w',

  'ي': 'y',
  'ﻱ': 'y',
  'ﻲ': 'y',
  'ﻴ': 'y',
  'ﻳ': 'y',

  'آ': "'aa",
  'ﺁ': "'aa",
  'ﺂ': "'aa",

  'ة': 'at',
  'ﺓ': 'at',
  'ﺔ': 'at',

  'ال': 'al',

  'ى': 'a',
  'ﻯ': 'a',
  'ﻰ': 'a',

  '،‎': ',',
  '؟': '?',
  '؛': ';',
  '۔': '.',
  '﴾': '{',
  '﴿': '}',

  '\u064E': 'a',
  '\u0650': 'i',
  '\u064F': 'u',
  '\u064E\u0627': 'aa',
  '\u0650\u064A': 'ii',
  '\u064F\u0648': 'uu',
  '\u064E\u064A': 'ay',
  '\u064E\u0648': 'aw',
  '\u064B': 'an',
  '\u064D': 'in',
  '\u064C': 'un',

  'ﷲ‎': 'الله',

  '؀': '#',

  '٠': '0',
  '١': '1',
  '٢': '2',
  '٣': '3',
  '٤': '4',
  '٥': '5',
  '٦': '6',
  '٧': '7',
  '٨': '8',
  '٩': '9',
  '٪': '%',
  '٫': '.',

  '\n': '\n',
  ',': ',',
  ' ': ' ',
  '.': '.',

  '\u06e1': '',
  '\u0652': '',

  '\u0651': s => s[s.length - 1],
  '\u0670': 'a',
  'إ': "'", // Arabic Letter Alef With Hamza Below
  'أ': "'"
}

/**
 * Build trie.
 */

const s = tools.build(m)

/**
 * Transform the text.
 */

function transform(i) {
  return tools.transform(i, s, m).replace(/'+/g, "'")
}
