const map = ({ rows, cols, ctx }) => {

  const drawMap = matrix => {
    for(let j = 0; j < rows; j++) {
      for(let i = 0; i < cols; i++) {
        ctx.fillStyle = matrix[j][i] === 1 ? "gray" : "white"
        ctx.fillRect(j * 10, i * 10, 10, 10)
        ctx.strokeStyle = "black"
        ctx.strokeRect(j * 10, i * 10, 10, 10)
      }
    }
  }

  return {
    drawMap
  }
}

export default map
