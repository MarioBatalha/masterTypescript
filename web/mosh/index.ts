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
interface Point {
  x: number;
  y: number;
}

class Point {
  x: number;
  y: number;

  draw() {
    console.log("X: " + this.x + " , Y: " + this.y);
  }
}

let point = new Point();
point.x = 1;
point.y = 2;
point.draw();
