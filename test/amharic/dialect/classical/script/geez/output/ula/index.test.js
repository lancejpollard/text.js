
const snake = require('../../../../../../../..')
const assert = require('assert')

const enoch_i = `
ቃለ ፡ በረከት ፡ ዘሄኖክ ፡ ዘከመ ፡ ባረከ ፡ ኅሩያነ ፡ ወጻድቃነ ፡ እለ ፡ ሀለዉ ፡ ይኩኑ ፡ በዕለተ ፡ ምንዳቤ ፡ ለአሰስሎ ፡ ኵሉ ፡ እኩያን ፡ ወረሲዓን ።
ወአውሥአ ፡ ወይቤ ፡ ሄኖክ ፡ ብእሲ ፡ ጻድቅ ፡ ዘእምኀበ ፡ እግዚአብሔር ፡ እንዘ ፡ አዕይንቲሁ ፡ ክሡታት ፡ ወይሬኢ ፡ ራእየ ፡ ቅዱሰ ፡ ዘበሰማያት ፡ ዘአርአዩኒ ፡ መላእክት ፡ ወሰማዕኩ ፡ እምኀቤሆሙ ፡ ኵሎ ፡ ወአእመርኩ ፡ አነ ፡ ዘእሬኢ ፡ ወአኮ ፡ ለዝ ፡ ትውልድ ፡ አላ ፡ ለዘይመጽእ ፡ ትውልድ ፡ ርኁቃን ።
በእንተ ፡ ኅሩያን ፡ እቤ ፡ ወአውሣእኩ ፡ በእንቲአሆሙ ፡ ምስለ ፡ ዘይወፅእ ፡ ቅዱስ ፡ ወዐቢይ ፡ እማኅደሩ ፡ ወአምላከ ፡ ዓለም ።
ወእምህየ ፡ ይከይድ ፡ ዲበ ፡ ሲና ፡ ደብር ፡ ወያስተርኢ ፡ በትዕይንቱ ፡ ወያስተርኢ ፡ በጽንዐ ፡ ኀይሉ ፡ እምሰማይ ።
ወይፈርህ ፡ ኵሉ ፡ ወያድለቀልቁ ፡ ትጉሃን ፡ ወይነሥኦሙ ፡ ፍርሀት ፡ ወረዓድ ፡ ዐቢይ ፡ እስከ ፡ አጽናፈ ፡ ምድር ።
ወይደነግፁ ፡ አድባር ፡ ነዋኃን ፡ ወይቴሐቱ ፡ አውግር ፡ ነዋኃት ፡ ወይትመሰዉ ፡ ከመ ፡ መዓረ ፡ ግራ ፡ እምላህብ ።
ወትሠጠም ፡ ምድር ፡ ወኵሉ ፡ ዘውስተ ፡ ምድር ፡ ይትሐጐል ፡ ወይከውን ፡ ፍትሕ ፡ ላዕለ ፡ ኵሉ ፡ ወላዕለ ፡ ጻድቃን ፡ ኵሎሙ ።
ለጻድቃንሰ ፡ ሰላመ ፡ ይገብር ፡ ሎሙ ፡ ወየዐቅቦሙ ፡ ለኅሩያን ፡ ወይከውን ፡ ሣህል ፡ ላዕሌሆሙ ፡ ወይከውኑ ፡ ኵሎሙ ፡ ዘአምላክ ፡ ወይሤርሑ ፡ ወይትባረኩ ፡ ወይሀርህ ፡ ሎሙ ፡ ብርሃነ ፡ አምላክ ።
ወናሁ ፡ መጽአ ፡ በትእልፈት ፡ ቅዱሳን ፡ ከመ ፡ ይግበር ፡ ፍትሐ ፡ ላዕሌሆሙ ፡ ወያሐጕሎሙ ፡ ለረሲዓን ፡ ወይትዋቀስ ፡ ኵሎ ፡ ዘሥጋ ፡ በእንተ ፡ ኵሉ ፡ ዘገብሩ ፡ ወረሰዩ ፡ ላዕሌሁ ፡ ኃጥአን ፡ ወረሲዓን ።
`

const enoch_o = `
k̖alẹ  bẹrẹkẹti̬  zẹhenoki̬  zẹkẹmẹ  barẹkẹ  hi̬ruyanẹ  wẹtśadi̬k̖anẹ  'i̬lẹ  hẹlẹwu  yi̬kunu  bẹ'i̬lẹtẹ  mi̬ni̬dabe  lẹ'ẹsẹsi̬lo  kwi̬lu  'i̬kuyani̬  wẹrẹsi'ani̬ .
wẹ'ẹwi̬si̬'ẹ  wẹyi̬be  henoki̬  bi̬'i̬si  tśadi̬k̖i̬  zẹ'i̬mi̬hẹbẹ  'i̬gi̬zi'ẹbi̬heri̬  'i̬ni̬zẹ  'ẹ'i̬yi̬ni̬tihu  ki̬sutati̬  wẹyi̬re'i  ra'i̬yẹ  k̖i̬dusẹ  zẹbẹsẹmayati̬  zẹ'ẹri̬'ẹyuni  mẹla'i̬ki̬ti̬  wẹsẹma'i̬ku  'i̬mi̬hẹbehomu  kwi̬lo  wẹ'ẹ'i̬mẹri̬ku  'ẹnẹ  zẹ'i̬re'i  wẹ'ẹko  lẹzi̬  ti̬wi̬li̬di̬  'ẹla  lẹzẹyi̬mẹtśi̬'i̬  ti̬wi̬li̬di̬  ri̬huk̖ani̬ .
bẹ'i̬ni̬tẹ  hi̬ruyani̬  'i̬be  wẹ'ẹwi̬sa'i̬ku  bẹ'i̬ni̬ti'ẹhomu  mi̬si̬lẹ  zẹyi̬wẹtśi̬'i̬  k̖i̬dusi̬  wẹ'ẹbiyi̬  'i̬mahi̬dẹru  wẹ'ẹmi̬lakẹ  'alẹmi̬ .
wẹ'i̬mi̬hi̬yẹ  yi̬kẹyi̬di̬  dibẹ  sina  dẹbi̬ri̬  wẹyasi̬tẹri̬'i  bẹti̬'i̬yi̬ni̬tu  wẹyasi̬tẹri̬'i  bẹtśi̬ni̬'ẹ  hẹyi̬lu  'i̬mi̬sẹmayi̬ .
wẹyi̬fẹri̬hi̬  kwi̬lu  wẹyadi̬lẹk̖ẹli̬k̖u  ti̬guhani̬  wẹyi̬nẹsi̬'omu  fi̬ri̬hẹti̬  wẹrẹ'adi̬  'ẹbiyi̬  'i̬si̬kẹ  'ẹtśi̬nafẹ  mi̬di̬ri̬ .
wẹyi̬dẹnẹgi̬tśu  'ẹdi̬bari̬  nẹwahani̬  wẹyi̬tehẹtu  'ẹwi̬gi̬ri̬  nẹwahati̬  wẹyi̬ti̬mẹsẹwu  kẹmẹ  mẹ'arẹ  gi̬ra  'i̬mi̬lahi̬bi̬ .
wẹti̬sẹt̖emi̬  mi̬di̬ri̬  wẹkwi̬lu  zẹwi̬si̬tẹ  mi̬di̬ri̬  yi̬ti̬hẹgyẹli̬  wẹyi̬kẹwi̬ni̬  fi̬ti̬hi̬  la'i̬lẹ  kwi̬lu  wẹla'i̬lẹ  tśadi̬k̖ani̬  kwi̬lomu .
lẹtśadi̬k̖ani̬sẹ  sẹlamẹ  yi̬gẹbi̬ri̬  lomu  wẹyẹ'ẹk̖i̬bomu  lẹhi̬ruyani̬  wẹyi̬kẹwi̬ni̬  sahi̬li̬  la'i̬lehomu  wẹyi̬kẹwi̬nu  kwi̬lomu  zẹ'ẹmi̬laki̬  wẹyi̬seri̬hu  wẹyi̬ti̬barẹku  wẹyi̬hẹri̬hi̬  lomu  bi̬ri̬hanẹ  'ẹmi̬laki̬ .
wẹnahu  mẹtśi̬'ẹ  bẹti̬'i̬li̬fẹti̬  k̖i̬dusani̬  kẹmẹ  yi̬gi̬bẹri̬  fi̬ti̬hẹ  la'i̬lehomu  wẹyahẹgwi̬lomu  lẹrẹsi'ani̬  wẹyi̬ti̬wak̖ẹsi̬  kwi̬lo  zẹsi̬ga  bẹ'i̬ni̬tẹ  kwi̬lu  zẹgẹbi̬ru  wẹrẹsẹyu  la'i̬lehu  hat̖i̬'ẹni̬  wẹrẹsi'ani̬ .
`

describe('amharic', () => {
  describe('geez', () => {
    describe('ula', () => {
      test('enoch', () => {
        assert.equal(snake('amharic', 'geez', 'ula', enoch_i), enoch_o)
      })
    })
  })
})
