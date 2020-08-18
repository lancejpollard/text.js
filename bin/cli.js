#!/usr/bin/env node

title('text')

const w = process.argv[2]
const o = process.argv[3]
const r = process.argv[4]
const d = process.argv[5]
const s = process.argv[6]
const x = process.argv[7]

if (!w || w === 'help') {
  console.log(
`
  $ text hebrew modern hebrew ula "$(<input.txt)"
  $ text chinese modern pinyin ula "$(<input.txt)"
  $ text gothic ancient gothic ipa "$(<input.txt)"
  $ text norse ancient norse ipa "$(<input.txt)"
`
  )
  process.exit(0)
}

const text = require('..')
const said = text(x, {
  family: w,
  source: {
    script: o,
    system: r
  },
  target: {
    script: d,
    system: s
  }
})

console.log(said)

function title(c) {
  const z = String.fromCharCode(27)
  const t = String.fromCharCode(7)
  process.stdout.write(`${z}]0;${c}${t}`)
}
