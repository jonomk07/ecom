var Customer = /** @class */ (function () {
    // Modifires are used to change the access level of a member
    // public - can be accessed from anywhere
    // private - can only be accessed within the class
    // protected - can be accessed within the class and by inherited classes
    // Conatructor method is called when an object is created from the class
    function Customer(theFirst, theLast) {
        // We use the "this" keyword to refer to the current object
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
var myCustomer = new Customer("John", "Doe");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
