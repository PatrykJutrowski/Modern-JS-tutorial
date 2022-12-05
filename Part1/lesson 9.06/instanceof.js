let fruits= ["Apple", "Mango", "Banana"];

console.log(fruits instanceof Array);
console.log(fruits instanceof Object);
console.log(fruits instanceof Number);
console.log(fruits instanceof String);

//Output
//true Array instanceof Object is true because functions are objects and every object has Object
// true because it's an object
//instanceof for testing object instance, cannot test primitive type.
// literal string is not an object, so intanceof would return false (string, number etc.).
// Whereas [...] is an object of Array

