class Rect {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getLength() {
    return (this.width + this.height) * 2;
  }
  getArea() {
    return this.height * this.width;
  }
}
let r1 = new Rect(5, 6);
console.log(r1.width);
console.log(r1.height);
console.log(r1.getArea());
console.log(r1.getLength());
