
const m = {}

/**
 * Define our supported transformations.
 */

hook('hebrew/hebrew/biblical/latin/ula')
hook('norse/latin/old/latin/ula')
hook('norse/latin/old/runic/medieval-futhark')
hook('mandarin/latin/pinyin/latin/ula')
hook('tibetan/tibetan/classical/latin/ula')

/**
 * Expose `text`.
 */

module.exports = text

/**
 * Parse text.
 */

function text(x, {
  family: w,
  source: {
    script: o,
    system: r
  },
  target: {
    script: d,
    system: s
  }
}) {

  if (!w) {
    throw new Error(`Language undefined`)
  }

  if (!o) {
    throw new Error(`Dialect undefined for language ${w}`)
  }

  if (!r) {
    throw new Error(`Script undefined for language ${w}`)
  }

  if (!d) {
    throw new Error(`Standard type undefined for language ${w} and script ${r}`)
  }

  if (!s) {
    throw new Error(`Output type undefined for language ${w} and script ${r}`)
  }

  if (!x) {
    throw new Error(`Text undefined`)
  }

  if (!m[w]) {
    throw new Error(`Language ${w} undefined`)
  }

  if (!m[w][o]) {
    throw new Error(`Dialect ${o} undefined for language ${w}`)
  }

  if (!m[w][o][r]) {
    throw new Error(`Script ${r} undefined for language ${w}`)
  }

  if (!m[w][o][r][d]) {
    throw new Error(`Standard type ${d} undefined for language ${w} and script ${r}`)
  }

  if (!m[w][o][r][d][s]) {
    throw new Error(`Output type ${s} undefined for language ${w} and script ${r}`)
  }

  var worm = m[w][o][r][d][s]()

  return worm(x)
}

/**
 * Hook in our plugin.
 */

function hook(path) {
  const x = path.split('/')
  const w = x.shift()
  const o = x.shift()
  const r = x.shift()
  const d = x.shift()
  const s = x.shift()
  m[w] = m[w] || {}
  m[w][o] = m[w][o] || {}
  m[w][o][r] = m[w][o][r] || {}
  m[w][o][r][d] = m[w][o][r][d] || {}
  m[w][o][r][d][s] = () => require(`./family/${w}/source/${o}/system/${r}/target/${d}/system/${s}`)
}
