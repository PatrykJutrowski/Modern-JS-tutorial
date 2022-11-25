// Create an object:
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
};

// Display data from the object:
document.getElementById("demo").innerHTML = person.fullName();

//this Alone In a browser window the global object is [object Window]
let x = this;
document.getElementById("demo1").innerHTML = x;


// In strict mode, when used alone, this also refers to the global object
"use strict";
let y = this;
document.getElementById("demo2").innerHTML = y;

//this in a Function (Default)


document.getElementById("demo4").innerHTML = myFunction();

function myFunction() {
    return this;
}