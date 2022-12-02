Arrow functions revisited in this tutorial, you will learn when you should not use the arrow functions
1) Event handlers
2) Object methods
3) Prototype methods
4) Functions that use the arguments object
An arrow function doesn’t have its own this value. Instead, it uses the this value of the enclosing lexical scope.
An arrow function also doesn’t have the arguments object.
Avoid using the arrow function for event handlers, object methods, prototype methods, and functions that use the arguments object.
https://javascript.info/arrow-functions
