import engine from './src/engine'

const mapElem         = document.getElementById("map")
const generationElem  = document.getElementById("generation")
const livingCellsElem = document.getElementById("livingCells")
const resetButton     = document.getElementById("reset")
const pauseButton     = document.getElementById("pause")

const updateLivinigCells = (livingCells) => {
  livingCellsElem.innerText = livingCells
}

const updateGeneration = (generation) => {
  generationElem.innerText = generation
}

const ctx  = mapElem.getContext("2d")
const rows = 50
const cols = 50

const _engine = engine({ rows, cols, ctx, updateLivinigCells, updateGeneration })


console.log("Assigning listeners to buttons...")
resetButton.onclick = () => {
  pauseButton.value = "Pause"
  _engine.start()
}
pauseButton.onclick = () => {
  pauseButton.value = pauseButton.value === "Pause" ? "Resume" : "Pause"
  _engine.pause()
}
console.log("Listeners assigned!")

_engine.start()
console.log("Game started!")
