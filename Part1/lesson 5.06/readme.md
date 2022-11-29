Iterable objects are objects that can be iterated over with for..of.
Technically, iterables must implement the Symbol.iterator method.
A JavaScript iterable is an object that has a Symbol.iterator.
The Symbol.iterator is a function that returns a next() function.
An iterable can be iterated over with the code: for (const x of iterable) { }
https://javascript.info/iterable
