In JavaScript the call(), apply(), and bind() methods can be used to assign an object to the “this” keyword.
The first argument is the object being assigned. Then we can pass in more arguments. These will then be used by the function.
The apply() method is similar to the call() method. 
The only difference is that the call() method takes arguments separately and the apply() method takes arguments as an array.
So when working with arrays you would want to use apply().

There are other interesting things we can do with apply().
For instance, JavaScript arrays do not have a max() method.
So if we have an array of numbers and we want to get the maximum value we could use apply().
Since we are not assigning anything to the “this” keyword, so we just set that to null then pass in our array.

The bind() method creates a new bound function, which wraps the original function object.
So we are essentially creating a new function bound to the object. Then we call the function along with our arguments. 
https://javascript.info/call-apply-decorators
