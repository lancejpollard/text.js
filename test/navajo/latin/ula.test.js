
const ula = require('../../../lib/navajo/latin/ula')
const ipa = require('../../../lib/language/ula/ipa')
const assert = require('assert')

const note_i = `
NihiTaaʼ yáʼąąshdi honílóonii,
Nízhiʼ diyingo óolzin leʼ,
Bee nóhólníihii náásgóó kʼeeʼąą yilzhish leʼ,
Áádóó bee íinínízinii tʼáá yáʼąąshdi ááníłígi átʼéego
Nahasdzáán bikáaʼgi ááníił leʼ.
Chʼiyáán tʼáá ákwíí jį´ nihaʼiyíłtsódígíí díí jį´ nihaa náádiníʼaah.
Áádóó tʼáá nihichʼįʼ bąąhági ádaaníiłii bá yóóʼadahidiitʼaahígi átʼéego
Nichʼįʼ ndaʼayiilzíhígíí nihá yóóʼahidíʼaah.
Áádóó nihí hodínóotahjįʼ nihiʼóółnííh lágo,
Ndi bąąhágiʼátʼéii bitsʼą´ąjįʼ yisdánihiyínííł.
Háálá ahóyéelʼáágóó ni tʼéí nóhólnííh áádóó tʼáadoo bee nóodziilí da, índa ayóóʼáńtʼé.
Tʼáá ákótʼée doo.
`

const note_o = `
nịhịtxaa' yá'ããxtị honị́lóonịị,
nị́jị' tịyịnko óolzịn le',
pee nóhólnị́ịhịị nááskóó k̖ee'ãã yịljịx le',
áátóó pee ị́ịnị́nị́zịnịị t̖áá yá'ããxtị áánị́s̤ị́kị át̖éeko
nahastsáán pịkxáa'kị áánị́ịs̤ le'.
t̖xịyáán t̖áá ákxwị́ị́ txị̃' nịha'ịyị́s̤tshótị́kị́ị́ tị́ị́ txị̃' nịhaa náátịnị́'aah.
áátóó t̖áá nịhịt̖xị̃' pããhákị átaanị́ịs̤ịị pá yóó'atahịtịịt̖aahị́kị át̖éeko
nịt̖xị̃' nta'ayịịlzị́hị́kị́ị́ nịhá yóó'ahịtị́'aah.
áátóó nịhị́ hotị́nóotxahtxị̃' nịhị'óós̤nị́ị́h láko,
ntị pããhákị'át̖éịị pịt̖sã'ãtxị̃' yịstánịhịyị́nị́ị́s̤.
háálá ahóyéel'áákóó nị t̖éị́ nóhólnị́ị́h áátóó t̖áatoo pee nóotsịịlị́ ta, ị́nta ayóó'áńt̖é.
t̖áá ákxót̖ée too.
`

describe('navajo', () => {
  describe('latin', () => {
    describe('ula', () => {
      test('note', () => {
        assert.equal(ula(note_i), note_o)
      })
    })
  })
})
