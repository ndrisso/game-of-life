export default class Map {
  constructor({ width, height, ctx }) {
    this._width  = width;
    this._height = height;
    this._ctx   = ctx;
  }

  emptyMap(){
    this._ctx.fillStyle = "white";
    this._ctx.fillRect(0, 0, this._width, this._height);
  }
}
