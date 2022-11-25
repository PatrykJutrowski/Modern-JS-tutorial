function Student(name, age) {
    this.name = name;
    this.age = age;
}

let first = new Student('John', 26);

document.write(first.name,first.age)