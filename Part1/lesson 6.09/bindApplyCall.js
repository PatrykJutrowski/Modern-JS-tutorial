const person = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
const personCall = {
    firstName:"John",
    lastName: "Doe"
}

// This will return "John Doe":
person.fullName.call(personCall)//With the call() method, you can write a method that can be used on different objects.

document.getElementById("demo").innerHTML = person.fullName.call(personCall);
//The apply() method takes arguments as an array.

const person1 = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

const personApply = {
    firstName:"John",
    lastName: "Doe"
}

document.getElementById("demo1").innerHTML = person1.fullName.apply(personApply);
//The apply() method takes arguments as an array.

//With the bind() method, an object can borrow a method from another object.
const person2 = {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

const member = {
    firstName:"Hege",
    lastName: "Nilsen",
}

let fullName = person2.fullName.bind(member);

document.getElementById("demo2").innerHTML = fullName();