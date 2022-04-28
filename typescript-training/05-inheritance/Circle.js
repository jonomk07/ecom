"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const Shape_1 = require("./Shape");
class Circle extends Shape_1.Shape {
    constructor(xPos, yPos, _radius) {
        super(xPos, yPos);
        this._radius = _radius;
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        this._radius = value;
    }
    getInfo() {
        return `Circle xPos=${this.xPos}, yPos=${this.yPos}, radius=${this._radius}`;
    }
}
exports.Circle = Circle;
