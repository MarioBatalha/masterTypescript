var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, "hi", false];
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Purple"] = 2] = "Purple";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var backgroundColor = Color.Red;
var message;
message = "abc";
var endsWithC = message.endsWith("c");
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log("X: " + this.x + " , Y: " + this.y);
    };
    return Point;
}());
var point = new Point();
point.x = 1;
point.y = 2;
point.draw();
