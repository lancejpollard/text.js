
const tools = require('../../../../../../../../../../framework/tools')

/**
 * Expose module.
 */

module.exports = transform

/**
 * Pinyin to ULA map.
 */

const m = {
  'b': 'p',
  'd': 't',
  'g': 'k',
  'p': 'ph',
  't': 'th',
  'k': 'kh',
  'm': 'm',
  'n': 'n',
  'zh': 'ṭx̣',
  'z': 'ts',
  'j': 'tx̤',
  'ch': 'ṭx̣h',
  'c': 'tsh',
  'q': 'tx̤h',
  'f': 'f',
  's': 's',
  'sh': 'x̣',
  'x': 'x̤',
  'h': 'x',
  'l': 'l',
  'r': 'ṛ',
  'y': 'y',
  'w': 'w',
  '-i': 'r',
  'iang': 'yaq',
  'iāng': 'yāq',
  'iàng': 'yàq',
  'iáng': 'yáq',
  'iǎng': 'yǎq',

  'iong': 'yụq',
  'iǒng': 'yụ̌q',
  'iōng': 'yụ̄q',
  'ióng': 'yụ́q',
  'iòng': 'yụ̀q',

  'ing': 'iq',
  'íng': 'íq',
  'ìng': 'ìq',
  'īng': 'īq',
  'ǐng': 'ǐq',

  'iao': 'yau',
  'iāo': 'yāu',
  'iào': 'yàu',
  'iáo': 'yáu',
  'iǎo': 'yǎu',

  'ian': 'yẹn',
  'iān': 'yẹ̄n',
  'iǎn': 'yẹ̌n',
  'ián': 'yẹ́n',
  'iàn': 'yẹ̀n',

  'ia': 'ya',
  'iā': 'yā',
  'ià': 'yà',
  'iá': 'yá',
  'iǎ': 'yǎ',

  'ie': 'ye',
  'iē': 'yē',
  'iě': 'yě',
  'ié': 'yé',
  'iè': 'yè',

  'iu': 'you',
  'iǔ': 'yoǔ',
  'iū': 'yoū',
  'iú': 'yoú',
  'iù': 'yoù',

  'in': 'in',
  'ín': 'ín',
  'ìn': 'ìn',
  'īn': 'īn',
  'ǐn': 'ǐn',

  'io': 'ya̤',
  'iō': 'yā̤',
  'iò': 'yà̤',
  'ió': 'yá̤',
  'iǒ': 'yǎ̤',

  'eng': 'ọq',
  'ēng': 'о̣̄q',
  'ěng': 'ọ̌q',
  'éng': 'ọ́q',
  'èng': 'ọ̀q',

  'ei': 'ei',
  'ēi': 'ēi',
  'ěi': 'ěi',
  'éi': 'éi',
  'èi': 'èi',

  'en': 'ọn',
  'ēn': 'о̣̄n',
  'ěn': 'ọ̌n',
  'én': 'ọ́n',
  'èn': 'ọ̀n',

  'er': 'ẹr',
  'ēr': 'ẹ̄r',
  'ěr': 'ẹ̌r',
  'ér': 'ẹ́r',
  'èr': 'ẹ̀r',

  'ang': 'aq',
  'āng': 'āq',
  'àng': 'àq',
  'áng': 'áq',
  'ǎng': 'ǎq',

  'ai': 'ai',
  'āi': 'āi',
  'ǎi': 'ǎi',
  'ái': 'ái',
  'ài': 'ài',

  'ao': 'au',
  'āo': 'āu',
  'ào': 'àu',
  'áo': 'áu',
  'ǎo': 'ǎu',

  'an': 'an',
  'ān': 'ān',
  'àn': 'àn',
  'án': 'án',
  'ǎn': 'ǎn',

  'ong': 'ụq',
  'ōng': 'ụ̄q',
  'óng': 'ụ́q',
  'ǒng': 'ụ̌q',
  'òng': 'ụ̀q',

  'uang': 'waq',
  'uāng': 'wāq',
  'uàng': 'wàq',
  'uáng': 'wáq',
  'uǎng': 'wǎq',

  'uai': 'wai',
  'uāi': 'wāi',
  'uài': 'wài',
  'uái': 'wái',
  'uǎi': 'wǎi',

  'uan': 'wan',
  'uān': 'wān',
  'uàn': 'wàn',
  'uán': 'wán',
  'uǎn': 'wǎn',

  'uan': 'ṳẹn',
  'uān': 'ṳẹ̄n',
  'uǎn': 'ṳẹ̌n',
  'uán': 'ṳẹ́n',
  'uàn': 'ṳẹ̀n',

  'ua': 'wọ',
  'uā': 'wо̣̄',
  'uǎ': 'wọ̌',
  'uá': 'wọ́',
  'uà': 'wọ̀',

  'uo': 'wo',
  'uō': 'wō',
  'uó': 'wó',
  'uǒ': 'wǒ',
  'uò': 'wò',

  'ui': 'wei',
  'uí': 'weí',
  'uì': 'weì',
  'uī': 'weī',
  'uǐ': 'weǐ',

  'un': 'wọn',
  'ǔn': 'wọ̌n',
  'ūn': 'wọ̄n',
  'ún': 'wọ́n',
  'ùn': 'wọ̀n',

  'ue': 'ṳe',
  'uē': 'ṳē',
  'uě': 'ṳě',
  'ué': 'ṳé',
  'uè': 'ṳè',

  'un': 'yn',
  'ǔn': 'yọ̌n',
  'ūn': 'yọ̄n',
  'ún': 'yọ́n',
  'ùn': 'yọ̀n',

  'ou': 'ou',
  'ōu': 'ōu',
  'óu': 'óu',
  'ǒu': 'ǒu',
  'òu': 'òu',

  'i': 'i',
  'í': 'í',
  'ì': 'ì',
  'ī': 'ī',
  'ǐ': 'ǐ',
  'ê': 'ẹ',
  'ē': 'о̤̄',
  'ě': 'ǒ̤',
  'é': 'ó̤',
  'è': 'ò̤',
  'e': 'o̤',
  'ā': 'ā',
  'à': 'à',
  'á': 'á',
  'ǎ': 'ǎ',
  'a': 'a',
  'ō': 'wō',
  'ó': 'wó',
  'ǒ': 'wǒ',
  'ò': 'wò',
  'o': 'wo',
  'o': 'a̤',
  'ǔ': 'ǔ',
  'ū': 'ū',
  'ú': 'ú',
  'ù': 'ù',
  'u': 'u',
  // 'u': 'ṳ',
  'yǔ': 'ywǔ',
  'yū': 'ywū',
  'yú': 'ywú',
  'yù': 'ywù',
  'yu': 'ywu',
  ' ': ' ',
  '　': ' ',
  '，': ', ',
  ',': ',',
  '。': '. ',
  '.': '.',
  '？': '? ',
  '?': '?',
  '；': '; ',
  ';': ';',
  '：': ': ',
  ':': ':',
  '（': ' (',
  '(': '(',
  '）': ') ',
  ')': ')',
  '［': ' [',
  '[': '[',
  '］': '] ',
  ']': ']',
  '【': ' [',
  '】': '] ',
  '『': '"',
  '』': '"',
  '「': "'",
  '」': "'",
  '"': '"',
  '"': '"',
  "'": "'",
  "'": "'",
  '“': '"',
  '”': '"',
  '‘': "'",
  '’': "'",
  '、': ', ',
  '\n': '\n',
  '‧': ' ',
  '‧': ' ',
  '《': ' <',
  '》': '> ',
  '〈': ' <',
  '〉': '> ',
  '<': '<',
  '>': '>',
  '…': '...',
  '⋯': '...',
  '～': '~',
  '—': '-'
}

const s = tools.build(m)

function transform(i) {
  return tools.transform(i, s, m)
}
