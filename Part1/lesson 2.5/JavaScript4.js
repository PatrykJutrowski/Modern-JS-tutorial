
//Data types
// 1. Number for any kind of numbers
let n = 12.345;
console.log(n)
// 2. bigint
console.log(9007199254740991 + 1); // 9007199254740992
//To be really precise, the “number” type can store larger integers (up to 1.7976931348623157 * 10308)
// 3. String
const name = 'John';
document.write(name)
// 4.Boolean (logical type)
let checkName = true; //yes, name is checked (the comparison result is "yes")
console.log(checkName)
let checkLastName = false; //no, last name is not checked (and here is "no"
console.log(checkLastName)
// 5. The “null” value
let age = null;
document.write(age)
//The code above states that age is unknown.
// 6.The “undefined” value
//let city;
//document.write(city); // shows "undefined"
// 7. Objects and Symbols -  for unique identifiers.
//Objects are associative arrays with several special features. But we will check it later
// 8. typeof gives us to see which type of value is stored in a variable
//for example:
// typeof true  (boolean)
// typeof name (string)