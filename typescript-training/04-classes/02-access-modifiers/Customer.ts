
// if you come across with an error like the once below then you can use the following command to fix it 
//"tsc --target ES2016 --noEmitOnError Customer.ts" add the compiler flag --target ES2016 to the command line

// Customer.ts:12:16 - error TS1056: Accessors are only available when targeting ECMAScript 5 and higher.
// 12     public get firstName(): string { 

class Customer {

    // Nothing special here "_" is just a convention to indicate that this is a private member
    private _firstName: string;
    private _lastName: string;

    constructor(theFirst: string, theLast: string) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }

    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(value: string) {
        this._firstName = value;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public set lastName(value: string) {
        this._lastName = value;
    }
}

let myCustumer = new Customer("Bob", "Smith");

myCustumer.firstName = "Jono";
myCustumer.lastName = "MuK";

console.log(myCustumer.firstName);
console.log(myCustumer.lastName);