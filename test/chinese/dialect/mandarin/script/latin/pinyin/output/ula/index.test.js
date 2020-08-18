
const snake = require('../../..')
const assert = require('assert')

const love_i = `ài`
const love_o = `ài`

const way_i = `
dào kě dào, fēi cháng dào. míng kě míng, fēi cháng míng.
wú míng tiān dì zhī shǐ, yǒu míng wàn wù zhī mǔ.
gù cháng wú yù yǐ guān qí miào; cháng yǒu yù yǐ guān qí jiǎo.
cǐ liǎng zhě tóng chū ér yì míng, tóng wèi zhī xuán,
xuán zhī yòu xuán, zhòng miào zhī mén.
`

const way_o = `
tàu khǒ̤ tàu, fēi ṭx̣háq tàu. míq khǒ̤ míq, fēi ṭx̣háq míq.
wú míq thyẹ̄n tì ṭx̣ī x̣ǐ, yǒu míq wàn wù ṭx̣ī mǔ.
kù ṭx̣háq wú ywù yǐ kṳẹ̄n tx̤hí myàu; ṭx̣háq yǒu ywù yǐ kṳẹ̄n tx̤hí tx̤yǎu.
tshǐ lyǎq ṭx̣ǒ̤ thụ́q ṭx̣hū ẹ́r yì míq, thụ́q wèi ṭx̣ī x̤ṳẹ́n,
x̤ṳẹ́n ṭx̣ī yòu x̤ṳẹ́n, ṭx̣ụ̀q myàu ṭx̣ī mọ́n.
`

describe('pin', () => {
  describe('ula', () => {
    test('love', () => {
      assert.equal(snake('chinese', 'pinyin', 'ula', love_i).trim(), love_o.trim())
    })

    test('way', () => {
      assert.equal(snake('chinese', 'pinyin', 'ula', way_i).trim(), way_o.trim())
    })
  })
})
