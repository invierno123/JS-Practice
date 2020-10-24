let squareList = [];
let widthList = [5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6];
let squarePrototype = {
  getArea() {
    return this.width * this.width;
  },
  getLength() {
    return this.width * 4;
  },
};
for (let i = 0; i < 12; i++) {
  squareList[i] = Object.create(squarePrototype);
  squareList[i].width = widthList[i];
}
