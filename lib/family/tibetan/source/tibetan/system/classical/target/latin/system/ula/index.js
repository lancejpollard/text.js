
const tools = require('../../../../../../../../../../framework/tools')

module.exports = transform
// http://www.thlib.org/reference/transliteration/#!essay=/thl/ewts/rules/

const consonants = {
  'རྐ': 'kh',
  'རྒ': 'g',
  'རྔ': 'ng',
  'རྔ': 'ng',
  'རྗ': 'dj',
  'རྙ': 'ny',
  'རྟ': 't',
  'རྡ': 'd',
  'རྣ': 'n',
  'རྦ': 'b',
  'རྨ': 'm',
  'རྩ': 'ts',
  'རྫ': 'dz',
  'ལྐ': 'kh',
  'ལྒ': 'g',
  'ལྔ': 'ng',
  'ལྕ': 'tx',
  'ལྗ': 'dj',
  'ལྟ': 't',
  'ལྡ': 'd',
  'ལྤ': 'p',
  'ལྦ': 'b',
  'ལྷ': 'h',
  'སྐ': 'kh',
  'སྒ': 'g',
  'སྔ': 'ng',
  'སྙ': 'ny',
  'སྟ': 't',
  'སྡ': 'd',
  'སྡ': 'd',
  'སྤ': 'p',
  'སྦ': 'b',
  'སྨ': 'm',
  'སྩ': 'ts',
  'ཀྱ': 'ky',
  'ཁྱ': 'khy',
  'གྱ': 'gy',
  'པྱ': 'ḳy',
  'ཕྱ': 'ḳhy',
  'བྱ': 'djy',
  'མྱ': 'ny',
  'ཧྱ': 'hy',
  'ཀྲ': 'tr',
  'ཁྲ': 'thr',
  'གྲ': 'dr',
  'ཏྲ': 'tr',
  'ཐྲ': 'thr',
  'དྲ': 'dr',
  'ནྲ': 'n',
  'པྲ': 'tr',
  'ཕྲ': 'thr',
  'བྲ': 'tr',
  'མྲ': 'm',
  'སྲ': 's',
  'ཧྲ': 'hr',
  'ཀླ': 'l',
  'གླ': 'l',
  'བླ': 'l',
  'རླ': 'l',
  'སླ': 'l',
  'ཟླ': 'd',
  'ཀྭ': 'k',
  'ཁྭ': 'k',
  'གྭ': 'g',
  'ཉྭ': 'ɲ',
  'དྭ': 'd',
  'ཙྭ': 'ts',
  'ཚྭ': 'tx',
  'ཞྭ': 'zh',
  'ཟྭ': 'z',
  'རྭ': 'r',
  'ལྭ': 'l',
  'ཤྭ': 'x',
  'ཧྭ': 'h',

  '\u0F54': 'p',
  '\u0FA4': 'p',
  '\u0F55': 'ph',
  '\u0FA5': 'ph',
  '\u0F56': 'b',
  '\u0FA6': 'b',
  '\u0F4F': 't',
  '\u0F9F': 't',
  '\u0F50': 'th',
  '\u0FA0': 'th',
  '\u0F51': 'd',
  '\u0FA1': 'd',
  '\u0F40': 'kh',
  '\u0F90': 'kh',
  '\u0F41': 'kh',
  '\u0F91': 'kh',
  '\u0F42': 'g',
  '\u0F92': 'g',
  '\u0F59': 'ts',
  '\u0FA9': 'ts',
  '\u0F5A': 'tsh',
  '\u0FAA': 'tsh',
  '\u0F5B': 'dz',
  '\u0FAB': 'dz',
  '\u0F45': 'tx',
  '\u0F95': 'tx',
  '\u0F46': 'txh',
  '\u0F96': 'txh',
  '\u0F47': 'dj',
  '\u0F97': 'dj',
  '\u0F66': 's',
  '\u0FB6': 's',
  '\u0F5F': 'z',
  '\u0FAF': 'z',
  '\u0F64': 'x',
  '\u0FB4': 'x',
  '\u0F5E': 'j',
  '\u0FAE': 'j',
  '\u0F67': 'h',
  '\u0FB7': 'h',
  '\u0F58': 'm',
  '\u0FA8': 'm',
  '\u0F53': 'n',
  '\u0FA3': 'n',
  '\u0F49': 'ny',
  '\u0F99': 'ny',
  '\u0F44': 'ng',
  '\u0F94': 'ng',
  '\u0F5D': 'w',
  '\u0FAD': 'w',
  '\u0FBA': 'w',
  '\u0F62': 'r',
  '\u0FB2': 'r',
  '\u0F63': 'l',
  '\u0FB3': 'l',
  '\u0F61': 'y',
  '\u0FB1': 'y',
  '\u0FBB': 'y',
  '\u0F43': 'gh',
  '\u0F93': 'gh',
  '\u0F4D': 'ḍh',
  '\u0F9D': 'ḍh',
  '\u0F52': 'dh',
  '\u0FA2': 'dh',
  '\u0F57': 'bh',
  '\u0FA7': 'bh',
  '\u0F5C': 'dzh',
  '\u0FAC': 'dzh',
  '\u0F69': 'kx̣',
  '\u0FB9': 'kx̣',
  '\u0F4A': 'ṭ',
  '\u0F9A': 'ṭ',
  '\u0F4B': 'ṭh',
  '\u0F9B': 'ṭh',
  '\u0F4C': 'ḍ',
  '\u0F9C': 'ḍ',
  '\u0F4E': 'ny',
  '\u0F9E': 'ny',
  '\u0F65': 'x̣',
  '\u0FB5': 'x̣',

  // balti
  'ཫ': 'k̤',
  'ཬ': 'ṛ̂',
  'ཁ༹': 'h̤h̤',
  'ག༹': 'r̈',

  // sanskrit
  'གྷ': 'ɡh',
  'ཛྷ': 'djh',
  'ཊ': 'ṭ',
  'ཋ': 'ṭh',
  'ཌ': 'ḍ',
  'ཌྷ': 'ḍh',
  'ཎ': 'ṇ',
  'དྷ': 'dh',
  'བྷ': 'bh',
  'ཥ': 'x̣',
  'ཀྵ': 'kx̣'
}

const vowels = {
  // vowels
  'ི': 'i',
  'ུ': 'u',
  'ེ': 'e',
  'ོ': 'o',
  '\u0F60': 'a',
  '\u0FB0': 'a',
  '\u0F68': 'a',
  '\u0FB8': 'a'
}

const punctuation = {
  '༉': '- ',
  '༈': '',
  '༄': '',
  '་': ' ',
  '།': '.',
  '༎': '.',
  '༺': '<',
  '༻': '>',
  '༼': '(',
  '༽': ')'
}

/**
 * Build trie.
 */

const C = tools.build(consonants)
const V = tools.build(vowels)
const P = tools.build(punctuation)

/**
 * Transform the text.
 */

function transform(i) {
  return transformWithDefaultVowel(i)
}

function transformWithDefaultVowel(i) {
  let o = []
  let w = 0

  let clusterSize = 0

  while (w < i.length) {
    let x = []
    let r = C
    let v = w

    while (true) {
      let c = i.charAt(v).toLowerCase()

      if (r[c]) {
        r = r[c]
        v++
      } else {
        break
      }
    }

    let z = i.substr(w, v - w).toLowerCase()

    clusterSize++

    x.push(consonants[z])

    let n = i.charAt(v)

    if (V[n]) {
      x.push(vowels[n])
      v++
    } else if (P[n]) {
      if (clusterSize === 1) {
        x.push('a')
      }
      clusterSize = 0
      x.push(punctuation[n])
      v++
      // no vowel on end, unless only 1 letter
    } else if (v != i.length) {
      x.push('a')
    }

    o.push.apply(o, x)

    w = v
  }

  return o.join('')
}
