In this chapter we will talk about Private and protected properties and methods.
The protected keyword is the hardest keyword of the three to imitate in JavaScript.
Public
This is the default nature of JavaScript. If something has access to an object, it does have access to its members.
Private
There are multiple ways of creating private variables in JavaScript. First is closures.
The second way is by using the # notation.
Protected
A class member that has been declared protected is only accessible by the object that owns the values.
A typical implementation of a protected scope blends some of the features of public and private scope and is the hardest scope to reproduce in JavaScript.
The protected accessor can be used anywhere, so it's mostly security by obscurity.
Remember that JavaScript exposes the source-code to anyone who cares to look, so don't expect this to be a silver-bullet for security.
https://javascript.info/private-protected-properties-methods
