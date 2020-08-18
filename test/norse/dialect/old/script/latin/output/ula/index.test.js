
const snake = require('../../../../../../../..')
const assert = require('assert')

const voluspa_i = `
Hljóðs bið ek allar helgar kindir,
meiri ok minni mögu Heimdallar;
viltu, at ek, Valföðr! vel framtelja forn spjöll fíra,
þau er fremst um man.

Ek man jötna ár um borna,
þá er forðum mik fœdda höfðu;
níu man ek heima, níu íviði,
mjötvið mœran fyr mold neðan.

Ár var alda þar er Ýmir bygði,
vara sandr né sær né svalar unnir,
jörð fannsk æva né upphiminn,
gap var ginnunga, en gras hvergi.

Áðr Burs synir bjöðum um ypðu,
þeir er Miðgarð mœran skópu;
sól skein sunnan á salar steina,
þá var grund gróin grœnum lauki.

Sól varp sunnan, sinni mána,
hendi inni hœgri um himinjódyr;
sól þat ne vissi hvar hon sali átti,
máni þat ne vissi hvat hann megins átti,
stjörnur þat ne vissu hvar þær staði áttu.
`

const voluspa_o = `
hlyȏc̣s bic̣ ek allaŕŕ helgaŕŕ kindiŕŕ,
mạiŕŕi ok minni me̤e̤gu hạimdallaŕŕ
wiltu, at ek, walfe̤e̤c̣ŕŕ. wel fŕŕamtelya foŕŕn spye̤e̤ll fȋŕŕa,
ca̬u eŕŕ fŕŕemst um man.

ek man ye̤e̤tna ȃŕŕ um boŕŕna,
cȃ eŕŕ foŕŕc̣um mik fe̤e̤dda he̤e̤fc̣u
nȋu man ek hạima, nȋu ȋwic̣i,
mye̤e̤twic̣ me̤e̤ŕŕan fi̤ŕŕ mold nec̣an.

ȃŕŕ waŕŕ alda caŕŕ eŕŕ ȋ̤miŕŕ bi̤gc̣i,
waŕŕa sandŕŕ nȇ sạạŕŕ nȇ swalaŕŕ unniŕŕ,
ye̤e̤ŕŕc̣ fannsk ạạwa nȇ upphiminn,
gap waŕŕ ginnunga, en gŕŕas hweŕŕgi.

ȃc̣ŕŕ buŕŕs si̤niŕŕ bye̤e̤c̣um um i̤pc̣u,
cạiŕŕ eŕŕ mic̣gaŕŕc̣ me̤e̤ŕŕan skȏpu
sȏl skạin sunnan ȃ salaŕŕ stạina,
cȃ waŕŕ gŕŕund gŕŕȏin gŕŕe̤e̤num la̬uki.

sȏl waŕŕp sunnan, sinni mȃna,
hendi inni he̤e̤gŕŕi um himinyȏdi̤ŕŕ
sȏl cat ne wissi hwaŕŕ hon sali ȃtti,
mȃni cat ne wissi hwat hann megins ȃtti,
stye̤e̤ŕŕnuŕŕ cat ne wissu hwaŕŕ cạạŕŕ stac̣i ȃttu.
`

const note_i = `
Faþer vár es ert í himenríki,
verði nafn þitt hæilagt
Til kome ríke þitt,
værði vili þin
sva a iarðu sem í himnum.
Gef oss í dag brauð vort dagligt
Ok fyr gefþu oss synþer órar,
sem vér fyr gefom þeim er viþ oss hafa misgert
Leiðd oss eigi í freistni,
heldr leys þv oss frá ollu illu.
Amen.
`

const note_o = `
faceŕŕ wȃŕŕ es eŕŕt ȋ himenŕŕȋki,
weŕŕc̣i nafn citt hạạilagt
til kome ŕŕȋke citt,
wạạŕŕc̣i wili cin
swa a iaŕŕc̣u sem ȋ himnum.
gef oss ȋ dag bŕŕa̬uc̣ woŕŕt dagligt
ok fi̤ŕŕ gefcu oss si̤nceŕŕ ȏŕŕaŕŕ,
sem wȇŕŕ fi̤ŕŕ gefom cạim eŕŕ wic oss hafa misgeŕŕt
lạic̣d oss ạigi ȋ fŕŕạistni,
heldŕŕ le̤i̤s cw oss fŕŕȃ ollu illu.
amen.
`

describe('old-norse', () => {
  describe('old-norse', () => {
    describe('ula', () => {
      test('voluspa', () => {
        assert.equal(snake('old-norse', 'norse', 'ula', voluspa_i), voluspa_o)
      })

      test('note', () => {
        assert.equal(snake('old-norse', 'norse', 'ula', note_i), note_o)
      })
    })
  })
})
