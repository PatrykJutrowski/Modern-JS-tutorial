This lesson will teach us about constructor, , operator "new"
A conctructor function is nothing but a function that creates for us an object very similar to factory function 
Constructor function is not returning object to you like factory doing it. Instead of this we are using operator keyword called "new"
 the ‘new’ keyword creates an empty object.
It binds this to our newly created object.
It adds a property onto our newly created object called “__proto__” which points to the constructor function’s prototype object.
It adds a return this to the end of the function, so that the object that is created is returned from the function.
https://javascript.info/constructor-new
