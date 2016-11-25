import engine from './src/engine'

const elem = document.getElementById("map")
const ctx  = elem.getContext("2d")
const rows = 50
const cols = 50

engine({ rows, cols, ctx }).start()
console.log("started!")
