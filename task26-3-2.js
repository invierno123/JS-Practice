function Rect(width, height) {
  this.width = width;
  this.height = height;
}
Rect.prototype.getLength = function () {
  return (this.width + this.height) * 2;
};
Rect.prototype.getArea = function () {
  return this.height * this.width;
};
let r1 = new Rect(5, 6);
console.log(r1.width);
console.log(r1.height);
console.log(r1.getArea());
console.log(r1.getLength());
