class Customer {
    constructor(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
let myCustumer = new Customer("Bob", "Smith");
myCustumer.firstName = "Jono";
myCustumer.lastName = "MuK";
console.log(myCustumer.firstName);
console.log(myCustumer.lastName);
