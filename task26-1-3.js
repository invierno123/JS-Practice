let squareList = [];
let widthList = [5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6];
function createSquare(width) {
  let obj = Object.create(squarePrototype);
  obj.width = width;
  return obj;
}
let squarePrototype = {
  getArea() {
    return this.width * this.width;
  },
  getLength() {
    return this.width * 4;
  },
};
for (let i = 0; i < 12; i++) {
  squareList[i] = createSquare(widthList[i]);
}
