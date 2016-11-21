export default class Map {
  constructor({ width, height, ctx }) {
    this._width  = width;
    this._height = height;
    this._ctx   = ctx;
  }

  emptyMap() {
    this._ctx.fillStyle = "white";
    this._ctx.fillRect(0, 0, this._width, this._height);
  }

  drawGrid() {
    this._ctx.fillStyle = "black";
    for(let i = 0; i < this._width; i += 10){
      this._ctx.beginPath();
      this._ctx.moveTo(i, 0);
      this._ctx.lineTo(i, this._height);
      this._ctx.stroke();
    }
    for(let j = 0; j < this._height; j += 10){
      this._ctx.beginPath();
      this._ctx.moveTo(0, j);
      this._ctx.lineTo(this._width, j);
      this._ctx.stroke();
    }
  }

  initMap() {
    debugger
    this.emptyMap();
    this.drawGrid();
  }

}
