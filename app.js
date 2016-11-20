import Map from './src/map'

const elem = document.getElementById("map")
const ctx  = elem.getContext("2d")

const map = new Map({ width: 500, height: 500, ctx })
map.emptyMap()

console.log("hi!")
