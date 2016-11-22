const map = ({ rows, cols, ctx }) => {

  const width  = cols * 10
  const height = rows * 10

  const emptyMap = () => {
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, width, height)
  }
  
  const drawGrid = () => {
    ctx.fillStyle = "black"
    for(let i = 0; i < width; i += 10){
      ctx.beginPath()
      ctx.moveTo(i, 0)
      ctx.lineTo(i, height)
      ctx.stroke()
    }
    for(let j = 0; j < height; j += 10){
      ctx.beginPath()
      ctx.moveTo(0, j)
      ctx.lineTo(width, j)
      ctx.stroke()
    }
  }

  const drawMap = (matrix) => {
    ctx.fillStyle = "blue"
    for(let j = 0; j < rows; j++) {
      for(let i = 0; i < cols; i++) {
        if(matrix[j][i] === 1) {
          ctx.fillRect(j * 10, i * 10, 10, 10)
        }
      }
    }
  }

  return {
    initMap: () => {
      emptyMap()
      drawGrid()
    },
    drawMap
  }
}

export default map
