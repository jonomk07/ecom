class Customer {
    firstName: string;
    lastName: string;

    // Modifires are used to change the access level of a member
    // public - can be accessed from anywhere
    // private - can only be accessed within the class
    // protected - can be accessed within the class and by inherited classes

    // A constructor is a special function of the class that is responsible for initializing the variables of the class
    constructor(theFirst: string, theLast: string) {

        // We use the "this" keyword to refer to the current object
        this.firstName = theFirst;
        this.lastName = theLast;
    }
}

let myCustomer = new Customer("John", "Doe");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);