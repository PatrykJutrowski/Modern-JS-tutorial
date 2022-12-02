const object1 = {
    property1: 42
};

const descriptor1 = Object.getOwnPropertyDescriptor(object1, 'property1');

console.log(descriptor1.configurable);
// expected output: true

console.log(descriptor1.value);
// expected output: 42
//object.getOwnPropertyDescriptor


const object2 = {};

Object.defineProperties(object2, {
    property2: {
        value: 42,
        writable: true
    },
    property3: {}
});

console.log(object2.property2);
// expected output: 42
