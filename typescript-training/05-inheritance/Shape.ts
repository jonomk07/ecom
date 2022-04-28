export class Shape {
    constructor(private _xPos: number, private _yPos: number) {
    }
    
    //Getter and Setter methods are used to access and modify private properties
    public get xPos(): number {
        return this._xPos;
    }

    public set xPos(value: number) {
        this._xPos = value;
    }

    public get yPos(): number {
        return this._yPos;
    }

    public set yPos(value: number) {
        this._yPos = value;
    }
    
    public getInfo(): string {
        return `Shape xPos=${this._xPos}, yPos=${this._yPos}`;
    }
}