Native prototypes
Native methods are built-in functions provided by the ECMAScript core specification.
So things like Object methods (e.g. Object.create), Array methods (e.g. Array#forEach) etc.
Detecting Native methods is relatively straight forward.
The real problem comes when you need to determine whether the object/method you’re detecting actually works the way the specification dictates it should work.
So just checking it is available to use isn’t good enough.
It is possible to modify native prototypes. Adding a method to String.prototype makes it available to all the strings.
https://javascript.info/native-prototypes
