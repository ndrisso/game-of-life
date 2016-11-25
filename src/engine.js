
import map from './map'

const engine = (mapProps) => {

  let matrix           = []
  let _map             = map(mapProps)
  const { rows, cols } = mapProps

  const randomizeMatrix = () => {
    for(let i = 0; i < rows; i++) {
      matrix[i] = []
      for(let j = 0; j < cols; j++) {
        // Giving more weight to death cells
        let rand = Math.floor(Math.random() * 8)
        matrix[i][j] = rand === 0 ? 1 : 0
      }
    }
  }

  const updateLife = () => {
    for(let i = 0; i < rows; i++) {
      for(let j = 0; j < cols; j++) {
        let alive = aliveNeightbors(i, j)
        let elem  = matrix[i][j]

        if(alive === 3 && elem === 0) {
          matrix[i][j] = 1
        }else if((alive < 2 || alive > 3) && elem === 1) {
          matrix[i][j] = 0
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

  const start = () => {
    randomizeMatrix()

    setInterval(() => {
      updateLife()
      _map.drawMap(matrix)
    }, 200);
  }

  return {
    start
  }
}

export default engine
