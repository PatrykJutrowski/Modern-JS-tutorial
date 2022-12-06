In this chapter we will talk about Javascript  Async iterators and Async Generators.

What are async iterators?

By definition, an iterator is an object that knows how to access each element at the time.

So Async iterators are like iterators, but this time, next() returns a promise. This promise resolves with the tuple { value, done }.

A promise needs to be returned because, at the time, the iterator returns the values of value and done are unknown.

The concept of an async iterator is the concept of a request queue. Because an iterator method can be called before the previous requests have been resolved, it needs to be queued internally.

What are async generators ? 

Async Generators
Async generator returns a promise with the tuple { value, done } instead of the directly returning { value, done }. This allows the generator to work over an asynchronous data source.
Async generator functions behave similarly to generator functions: the generator function returns an object that has a next() function, and calling next() executes the generator function until the next yield. The difference is that an async iterator's next() function returns a promise.

https://javascript.info/async-iterators-generators
