const map = ({ width, height, ctx }) => {

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

  return {
    initMap: () => {
      emptyMap()
      drawGrid()
    }
  }
}

export default map
