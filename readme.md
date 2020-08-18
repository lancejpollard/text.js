
<br/>
<br/>
<br/>
<br/>

<h3 align="center">text.js</h3>
<p align="center">
  Language Text Transformation
</p>

<br/>
<br/>

<p align="center">
  <a href="#introduction">Introduction</a> •
  <a href="#installation">Installation</a>
</p>

<br/>
<br/>
<br/>

### Introduction

Use this to transform text.

```js
const text = require('@lancejpollard/text.js')

text('בְּרֵאשִׁ֖ית בָּרָ֣א אֱלֹהִ֑ים אֵ֥ת הַשָּׁמַ֖יִם וְאֵ֥ת הָאָֽרֶץ׃', {
  family: 'hebrew',
  source: {
    script: 'hebrew',
    system: 'biblical'
  },
  target: {
    script: 'latin',
    system: 'ula'
  }
})
// ber̈e'xiyt bar̈a' 'elohiym 'et haxamayim ve'et ha'ár̈ets.
```

Or use it from the command line

```
$ text mandarin latin pinyin latin ula \
  "Nǐ jiào shén me míng zì"
nǐ tx̤yàu x̣ọ́n mo̤ míq tsì
$ text hebrew hebrew biblical latin ula \
  "בְּרֵאשִׁ֖ית בָּרָ֣א אֱלֹהִ֑ים אֵ֥ת הַשָּׁמַ֖יִם וְאֵ֥ת הָאָֽרֶץ׃"
ber̈e'xiyt bar̈a' 'elohiym 'et haxamayim ve'et ha'ár̈ets.
$ text norse latin old runic medieval-futhark \
  "Hljóðs bið ek allar helgar kindir"
ᚼᛚᛦᚮᚧᛋ ᛒᛁᚧ ᛂᚴ ᛆᛚᛚᛆᚱ ᚼᛂᛚᚵᛆᚱ ᚴᛁᚿᛑᛁᚱ
$ text norse latin old latin ula \
  "Hljóðs bið ek allar helgar kindir"
hlyȏc̣s bic̣ ek allaŕŕ helgaŕŕ kindiŕŕ
$ text tibetan tibetan classical latin ula \
  "སེམས་ལ་སེམས་མ་མཆིས་ཏེ"
semas la semas ma matxhis te
```

### Installation

```
$ npm install @lancejpollard/text.js
```

Or for CLI:

```
$ npm install @lancejpollard/text.js -g
```

### License

MIT
