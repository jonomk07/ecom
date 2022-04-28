"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shape = void 0;
class Shape {
    constructor(_xPos, _yPos) {
        this._xPos = _xPos;
        this._yPos = _yPos;
    }
    //Getter and Setter methods are used to access and modify private properties
    get xPos() {
        return this._xPos;
    }
    set xPos(value) {
        this._xPos = value;
    }
    get yPos() {
        return this._yPos;
    }
    set yPos(value) {
        this._yPos = value;
    }
    getInfo() {
        return `Shape xPos=${this._xPos}, yPos=${this._yPos}`;
    }
}
exports.Shape = Shape;
