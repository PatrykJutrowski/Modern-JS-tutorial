//Public
class ObjectCreator {
    name;

    constructor(name) {
        this.name = name;
    }

    sayMyName() {
        return this.name;
    }
}

const myObject = new ObjectCreator("Parwinder");
console.log(myObject.name); // Parwinder
console.log(myObject.sayMyName()); // Parwinder

//Private
class ObjectCreator1 {
    #meaningOfLife;

    constructor(name) {
        this.#meaningOfLife = 42;
    }

    returnMeaningOfLife() {
        return this.#meaningOfLife;
    }

    #returnAMessage() {
        return "You will do great things in life";
    }
}

const myObject1 = new ObjectCreator1("Parwinder");
console.log(myObject1.returnMeaningOfLife()); // 42
console.log(myObject1["#meaningOfLife"]); // undefined
console.log(myObject1.#meaningOfLife); // SyntaxError
console.log(myObject1.#returnAMessage); // SyntaxError