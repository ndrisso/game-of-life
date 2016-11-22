
import map from './map'

const randomMatrix = (rows, cols) => {
  let matrix = Array(rows).fill(Array(cols))

  for(let i = 0; i < rows; i++) {
    for(let j = 0; j < cols; j++) {
      matrix[i][j] = Math.floor(Math.random() * 2)
    }
  }

  return matrix
}

export const start = (mapProps) => {
  let matrix = randomMatrix(mapProps.rows, mapProps.cols)

  const m = map(mapProps)
  m.initMap()
  m.drawMap(matrix)
}
