
const snake = require('../../..')
const assert = require('assert')

const hymn_i = `
Nū scylun hergan     hefaenrīcaes Uard,
metudæs maecti     end his mōdgidanc,
uerc Uuldurfadur,     suē hē uundra gihwaes,
ēci dryctin     ōr āstelidæ
hē ǣrist scōp     aelda barnum
heben til hrōfe,     hāleg scepen.
Thā middungeard     moncynnæs Uard,
eci Dryctin,     æfter tīadæ
firum foldu,     Frēa allmectig.
`

const note_i = `
Fæder ure şu şe eart on heofonum,
si şin nama gehalgod.
to becume şin rice,
gewurşe ğin willa,
on eorğan swa swa on heofonum.
urne gedæghwamlican hlaf syle us todæg,
and forgyf us ure gyltas,
swa swa we forgyfağ urum gyltendum.
and ne gelæd şu us on costnunge,
ac alys us of yfele soşlice.
`

const note_o = ``

describe('old-english', () => {
  describe('old-english', () => {
    describe('ula', () => {
      test('note', () => {
        assert.equal(snake('old-english', 'english', 'ula', note_i), note_o)
      })
    })
  })
})
