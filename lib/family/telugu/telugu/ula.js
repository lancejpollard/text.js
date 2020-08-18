
const tools = require('../../tools')

/**
 * Expose module.
 */

module.exports = transform

/**
 * Telugu to ULA map.
 */

const m = {
  'క': 'k',
  'ఖ': 'kh',
  'గ': 'g',
  'ఘ': 'gh',
  'ఙ': 'q',
  'చ': 'tx',
  'ఛ': 'txh',
  'జ': 'dj',
  'ఝ': 'djh',
  'ఞ': 'ny',
  'ట': 'ṭ',
  'ఠ': 'ṭh',
  'డ': 'ḍ',
  'ఢ': 'ḍh',
  'ణ': 'ṇ',
  'త': 't',
  'థ': 'th',
  'ద': 'd',
  'ధ': 'dh',
  'న': 'n',
  'ప': 'p',
  'ఫ': 'ph',
  'బ': 'b',
  'భ': 'bh',
  'మ': 'm',
  'య': 'y',
  'ర': 'ŕ',
  'ల': 'l',
  'వ': 'v̤',
  'ళ': 'ḷ',
  'శ': 'x',
  'ష': 'x̣',
  'స': 's',
  'హ': 'h',
  'ఱ': 'ŕŕ'
}

// అ  భ  a  /a/
// ఆ  భా  ā  /aː/

// ఇ  భి  i  /i/
// ఈ  భీ  ī  /iː/

// ఉ  భు  u  /u/
// ఊ  భూ  ū  /uː/

// ఋ  భృ  r̥  /ru/
// ౠ  భౄ  r̥̄  /ruː/

// ఌ  భౢ  l̥  /alu/
// ౡ  భౣ  l̥̄  /alu:/

// ఎ  భె  e  /e/
// ఏ  భే  ē  /eː/

// ఐ  భై  ai  /aj/
// ఒ  భొ  o  /o/

// ఓ  భో  ō  /oː/
// ఔ  భౌ  au  /aw/

// అం  భం  ṃ    అః  భః  ḥ


// క + ్ → క్     [ka] + [∅] → [k]
// క + ఁ → కఁ  [ka] + [n] → [kan̆]
// క + ం → కం  [ka] + [m] → [kaṁ]
// క + ః → కః  [ka] + [h] → [kaḥ]

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
