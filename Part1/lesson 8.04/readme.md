Objects without __proto__
Every time you create a new object via an object literal (the {}),
behind the scenes JavaScript invokes the Object constructor to create the object, just as if you'd used new Object().
This is what allows your new object to inherit properties from Object.prototype.

But sometimes it would be convenient to create an object that doesn't inherit from a prototype at all.
For instance, if you'd like to use an object as a hash/map of arbitrary keys to values.
The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.
https://javascript.info/prototype-methods
