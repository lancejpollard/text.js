
const snake = require('../../../../../../../..')
const assert = require('assert')

const intro_i = `
בְּרֵאשִׁית תַּמָּן תְּרֵ''י תַּמָּן שַׁבָּ''ת, כְּגַוְונָא דָא בְּ' רֵאשִׁי''ת
בָּ''רָא שִׁי''ת, וְאִינוּן תְּרֵי שַׁבָּתוֹת, עֲלַיְיהוּ אִתְּמַר (שמות לא טז)
וְשָׁמְרוּ בְנֵי יִשְׂרָאֵל אֶת הַשַּׁבָּת לַעֲשׂוֹת אֶת הַשַּׁבָּת וְגוֹמֵר, תְּרֵין
זִמְנִין אַדְכִּיר הָכָא שַׁבָּת, לָקֳבֵל שְׁכִינְתָּא עִלָּאָה וְתַתָּאָה, לְדֹרֹתָם
מַאי לְדֹרֹתָם, אֶלָּא זַכָּאָה אִיהוּ מָאן דְּעָבִיד לוֹן דִּירָה בְּשַׁבָּת בִּתְרֵי
בָתֵּי לִבָּא, וְאִתְפְּנֵי מִתַּמָּן יֵצֶר הָרָע דְּאִיהוּ חִלּוּל שַׁבָּת, בְּרִית
עוֹלָם דָּא צַדִּיק, דְּשַׁרְיָין תַּרְוַיְיהוּ עֲלֵיהּ, חַד לְאַמְלָאָה לֵיהּ
וְחַד לְאִתְמַלְיָא מִינֵיהּ.
`

const intro_o = `
ber̈e'xiyt taman ter̈e'y taman xaba't, kegavevna' da' be' r̈e'xiy't
ba'r̈a' xiy't, ve'iynvn ter̈ey xabatvot, 'alayeyhv 'itemar̈ (mvt l' tz)
vexamer̈v veney yiser̈a'el 'et haxabat la'asvot 'et haxabat vegvomer̈, ter̈eyn
zimeniyn 'adekiyr̈ hah̤h̤a' xabat, lakovel xeh̤h̤iyneta' 'ila'ah vetata'ah, ledor̈otam
ma'y ledor̈otam, 'ela' zaka'ah 'iyhv ma'n de'aviyd lvon diyr̈ah bexabat biter̈ey
vatey liba', ve'itepeney mitaman yetser̈ har̈a' de'iyhv h̤h̤ilvl xabat, ber̈iyt
'volam da' tsadiyk, dexar̈eyayn tar̈evayeyhv 'aleyh, h̤h̤ad le'amela'ah leyh
veh̤h̤ad le'itemaleya' miyneyh.
`

describe('hebrew', () => {
  describe('hebrew', () => {
    describe('ula', () => {
      test('intro', () => {
        assert.equal(snake('hebrew', 'hebrew', 'ula', intro_i), intro_o)
      })
    })
  })
})
