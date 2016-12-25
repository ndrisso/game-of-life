
import map from './map'

const engine = (mapProps) => {

  let generation   = 0
  let matrix       = []
  let livingCells  = 0
  let running      = false
  let gameInterval = null

  const _map = map(mapProps)
  const { rows, cols, updateLivinigCells, updateGeneration } = mapProps

  const randomizeMatrix = () => {
    for(let i = 0; i < rows; i++) {
      matrix[i] = []
      for(let j = 0; j < cols; j++) {
        // Giving more weight to death cells
        let rand = Math.floor(Math.random() * 12)

        matrix[i][j] = 0
        if(rand === 0) {
          matrix[i][j] = 1
          livingCells++;
        }
      }
    }
  }

  const reset = () => {
    generation  = 0
    livingCells = 0
    matrix      = []
    clearInterval(gameInterval)
  }

  const updateLife = () => {
    for(let i = 0; i < rows; i++) {
      for(let j = 0; j < cols; j++) {
        let alive = aliveNeightbors(i, j)
        let elem  = matrix[i][j]

        if(alive === 3 && elem === 0) {
          matrix[i][j] = 1
          livingCells++;
        }else if((alive < 2 || alive > 3) && elem === 1) {
          matrix[i][j] = 0
          livingCells--;
        }
      }
    }
  }

  const aliveNeightbors = (row, col) => {
    let fromRow = row - 1 < 0 ? row : row - 1
    let fromCol = col - 1 < 0 ? col : col - 1
    let toRow   = row + 1 === rows ? row : row + 1
    let toCol   = col + 1 === cols ? col : col + 1
    let alives  = 0

    for(let i = fromRow; i <= toRow; i++) {
      for(let j = fromCol; j <= toCol; j++) {
        if(matrix[i][j] === 1) {
          alives++
        }
      }
    }

    return alives - matrix[row][col]
  }

  const startGameLoop = () => {
    gameInterval = setInterval(() => {
      generation++;
      updateLife()
      updateLivinigCells(livingCells)
      updateGeneration(generation)
      _map.drawMap(matrix)
    }, 200);

    running = true;
  }

  const start = () => {
    reset()
    randomizeMatrix()
    startGameLoop()
  }


  const pause = () => {
    if(!running) {
      startGameLoop()
    } else {
      clearInterval(gameInterval)
      running = false;
    }
  }

  return {
    start,
    pause
  }
}

export default engine
