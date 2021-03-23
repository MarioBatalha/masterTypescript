let a: Number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = [1, true, "hi", false];

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Color {
  Red = 0,
  Green = 1,
  Purple = 2,
  Blue = 3
}
let backgroundColor = Color.Red;

var message;
message = "abc";
let endsWithC = (<string>message).endsWith("c");

//interface
/*interface Point {
 private x?: number;
 private y?: number;
}*/

class Point {
  constructor(private _x?: number, private _y?: number) {
    this.x = x;
    this.y = y;
  }
  get x() {
    return this.x;
  }
  set x(value) {
    if (value < 0) throw new Error("value cannot be less than 0");
    this._x = value;
  }

  draw() {
    console.log("X: " + this.x + " , Y: " + this.y);
  }
}

let point = new Point(1, 3);

point.draw();
