
const snake = require('../../..')
const assert = require('assert')

const note_i = `
𐌰𐍄𐍄𐌰 𐌿𐌽𐍃𐌰𐍂, 𐌸𐌿 𐌹𐌽 𐌷𐌹𐌼𐌹𐌽𐌰𐌼,
𐍅𐌴𐌹𐌷𐌽𐌰𐌹 𐌽𐌰𐌼𐍉 𐌸𐌴𐌹𐌽,
𐌵𐌹𐌼𐌰𐌹 𐌸𐌹𐌿𐌳𐌹𐌽𐌰𐍃𐍃𐌿𐍃 𐌸𐌴𐌹𐌽𐍃,
𐍅𐌰𐌹𐍂𐌸𐌰𐌹 𐍅𐌹𐌻𐌾𐌰 𐌸𐌴𐌹𐌽𐍃,
𐍃𐍅𐌴 𐌹𐌽 𐌷𐌹𐌼𐌹𐌽𐌰 𐌾𐌰𐌷 𐌰𐌽𐌰 𐌰𐌹𐍂𐌸𐌰𐌹.
𐌷𐌻𐌰𐌹𐍆 𐌿𐌽𐍃𐌰𐍂𐌰𐌽𐌰 𐌸𐌰𐌽𐌰 𐍃𐌹𐌽𐍄𐌴𐌹𐌽𐌰𐌽 𐌲𐌹𐍆 𐌿𐌽𐍃 𐌷𐌹𐌼𐌼𐌰 𐌳𐌰𐌲𐌰,
𐌾𐌰𐌷 𐌰𐍆𐌻𐌴𐍄 𐌿𐌽𐍃 𐌸𐌰𐍄𐌴𐌹 𐍃𐌺𐌿𐌻𐌰𐌽𐍃 𐍃𐌹𐌾𐌰𐌹𐌼𐌰,
𐍃𐍅𐌰𐍃𐍅𐌴 𐌾𐌰𐌷 𐍅𐌴𐌹𐍃 𐌰𐍆𐌻𐌴𐍄𐌰𐌼 𐌸𐌰𐌹𐌼 𐍃𐌺𐌿𐌻𐌰𐌼 𐌿𐌽𐍃𐌰𐍂𐌰𐌹𐌼,
𐌾𐌰𐌷 𐌽𐌹 𐌱𐍂𐌹𐌲𐌲𐌰𐌹𐍃 𐌿𐌽𐍃 𐌹𐌽 𐍆𐍂𐌰𐌹𐍃𐍄𐌿𐌱𐌽𐌾𐌰𐌹,
𐌰𐌺 𐌻𐌰𐌿𐍃𐌴𐌹 𐌿𐌽𐍃 𐌰𐍆 𐌸𐌰𐌼𐌼𐌰 𐌿𐌱𐌹𐌻𐌹𐌽.
𐌰𐌼𐌴𐌽.
`

const note_o = `
atta ụnsaŕŕ, cụ in himinam,
weeihnai namoo ceein,
kwimai ciụdinassụs ceeins,
waiŕŕcai wilya ceeins,
swee in himina yah ana aiŕŕcai.
hlaif̣ ụnsaŕŕana cana sinteeinan ɡif̣ ụns himma daɡa,
yah af̣leet ụns cateei skụlans siyaima,
swaswee yah weeis af̣leetam caim skụlam ụnsaŕŕaim,
yah ni bŕŕiɡɡais ụns in f̣ŕŕaistụbnyai,
ak laụseei ụns af̣ camma ụbilin.
ameen.
`

describe('gothic', () => {
  describe('gothic', () => {
    describe('ula', () => {
      test('note', () => {
        assert.equal(snake('gothic', 'gothic', 'ula', note_i), note_o)
      })
    })
  })
})
