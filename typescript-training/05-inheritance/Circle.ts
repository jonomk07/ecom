import { Shape } from './Shape';

export class Circle extends Shape {
    constructor(xPos: number, yPos: number, private _radius: number) {
        super(xPos, yPos);
    }

    public get radius(): number {
        return this._radius;
    }

    public set radius(value: number) {
        this._radius = value;
    }

    public getInfo(): string {
        return `Circle xPos=${this.xPos}, yPos=${this.yPos}, radius=${this._radius}`;
    }
}