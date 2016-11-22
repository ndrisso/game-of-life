import _map from './src/map'

const elem = document.getElementById("map")
const ctx  = elem.getContext("2d")
const HEIGHT = 500
const WIDTH = 500

const m = _map({ width: WIDTH, height: HEIGHT, ctx })
m.initMap()

console.log("hi!")
