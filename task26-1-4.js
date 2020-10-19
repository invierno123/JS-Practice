let squareList = [];
let widthList = [5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6];
function createSquare(width) {
  let obj = Object.create(creatSquare.squarePrototype);
  obj.width = width;
  return obj;
}
createSquare.squarePrototype = {
  //把原型放到函数上
  getArea() {
    return this.width * this.width;
  },
  getLength() {
    return this.width * 4;
  },
  constructor: createSquare, //方便通过原型找到构造函数
};
for (let i = 0; i < 12; i++) {
  squareList[i] = createSquare(widthList[i]);
  console.log(squareList[i].constructor); //constructor可以知道是谁构造了这个对象
}
