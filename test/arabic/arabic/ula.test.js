
const ula = require('../../../lib/arabic/arabic/ula')
const assert = require('assert')

const pro_i = `عند البطون ضاعت العقول`
// ‘Inda al botoun da’at al ‘okoul.
const pro_o = `'nd albt'wn d'aa't al'k̤wl`

const recitation_i = `
بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ
الرَّحْمَٰنِ الرَّحِيمِ
مَالِكِ يَوْمِ الدِّينِ
إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ
اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ
صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ
`

// Reference:
//
// Bismillaahir Rahmaanir Raheem
// Alhamdu lillaahi Rabbil 'aalameen
// Ar-Rahmaanir-Raheem
// Maaliki Yawmid-Deen
// Iyyaaka na'budu wa lyyaaka nasta'een
// Ihdinas-Siraatal-Mustaqeem
// Siraatal-lazeena an'amta 'alaihim ghayril-maghdoobi 'alaihim wa lad-daaalleen

const recitation_o = `
bismi alllahi alr̂r̂aḥmaani alr̂r̂aḥiimi
alḥamdu lillahi r̂abbi al'aalamiina
alr̂r̂aḥmaani alr̂r̂aḥiimi
maaliki yawmi alddiini
'iiiiaaka na'budu wa'iiiiaaka nasta'iinu
aahdinaa als's'ir̂aat'a almustak̤iima
s'ir̂aat'a alalac̣iina 'an'amta 'alayhim ṙayr̂i almaṙd'uubi 'alayhim walaa ald'd'aalliina
`

describe('ara', () => {
  describe('ula', () => {
    test('proverb', () => {
      assert.equal(ula(pro_i), pro_o)
    })

    test('recitation', () => {
      assert.equal(ula(recitation_i), recitation_o)
    })
  })
})
