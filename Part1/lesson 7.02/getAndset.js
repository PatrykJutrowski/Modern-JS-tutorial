
//getters => access properties
//setters => change (mutate) them


const person = {
    firstName : "Sam",
    lastName : "smith",
    get fullName(){
        return `${person.firstName} ${person.lastName}`//getter code executed on getting obj.fullName
    },
    set fullName(value){//setter code executed on setting obj.fullName = value
        const parts = value.split(" ")
        this.firstName = parts[0]
        this.lastName = parts[1]
    }

};

person.fullName = "John Doe";
console.log(person);