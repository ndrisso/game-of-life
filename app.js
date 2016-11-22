import { start } from './src/engine'

const elem   = document.getElementById("map")
const ctx    = elem.getContext("2d")
const HEIGHT = 500
const WIDTH  = 500

start({ rows: WIDTH / 10, cols: HEIGHT / 10, ctx })
console.log("started!")
