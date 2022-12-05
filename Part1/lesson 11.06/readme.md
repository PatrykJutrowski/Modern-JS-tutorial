Promisification
Promisification in JavaScript: How to and When is It Safe?
How to turn a function that takes a callback into a promise
When is it safe to promisify?
To answer that we need to realize one important difference between promise and callback.

Promise can only have one result, whereas callback may be called multiple times.

Promise can only have one result, whereas callback may be called multiple times.

The consequence is that you need to be careful while changing a function that accepts a callback into a promise. There are some functions that will not act the way you may think after promisification.

Unsafe promisification
Do you know setInterval() function? It takes a custom function as a callback and executes it every X milliseconds.

Conclusion

setInterval is not a good candidate to promisify. Actually, any function that calls its callback multiple times shouldn’t be promisified

https://javascript.info/promisify
