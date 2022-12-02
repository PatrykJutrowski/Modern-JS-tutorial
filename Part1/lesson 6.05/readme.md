Global object:
The global object in JavaScript is an always defined object that provides variables and functions, and is available anywhere.
In a web browser, the global object is the window object, while it is named global in Node.js.
The global object can be accessed using the this operator in the global scope.
JavaScript's global scope is represented by a global object that changes based on its execution context.
A global object is just an object that is always available and accessible.
The execution context of our JS code is where we're running the code (for example, in a web browser or in a server).
For JavaScript run in the browser, the global object is set to the window object.
All globally scoped built-in or custom JS functions are added to the global object. In our projects, that means these functions are added to the window object.
However, only globally scoped variables declared with var are added to the global object.
We also need to be careful not to accidentally override window properties.
Because the window object is the global object for our JS, we don't have to explicitly reference the window object to access its properties.
For example, window.document can be written just as document, and this is the conventional way of doing things.
https://javascript.info/global-object
