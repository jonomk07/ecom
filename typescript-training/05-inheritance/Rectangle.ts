import { Shape } from './Shape';

export class Rectangle extends Shape {

 constructor(xPos: number, yPos: number, private _width: number, private _height: number) {
     super(xPos, yPos);
 }
 public get width(): number {
     return this._width;
 }
    public set width(value: number) {
        this._width = value;
    }
    public get height(): number {
        return this._height;
    }
    public set height(value: number) {
        this._height = value;
    }
    public getInfo(): string {
        return `Rectangle xPos=${this.xPos}, yPos=${this.yPos}, width=${this._width}, height=${this._height}`;
    }
}