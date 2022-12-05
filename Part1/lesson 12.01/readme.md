Generators

Understanding Generators in JavaScript:

A generator function is a function that returns a Generator object, and is defined by the function keyword followed by an asterisk (*). 
A generator is a process that can be paused and resumed and can yield multiple values. A generator in JavaScript consists of a generator function, which returns an iterable Generator object.

Create JavaScript Generators
To create a generator, you need to first define a generator function with function* symbol. The objects of generator functions are called generators.

Using yield to Pause Execution
As mentioned above, you can pause the execution of a generator function without executing the whole function body. For that, we use the yield keyword. 

Generator methods : 

  1) next()	Returns a value of yield
  2) return()	Returns a value and terminates the generator
  3) throw()	Throws an error and terminates the generator

Uses of Generators
  1) Generators let us write cleaner code while writing asynchronous tasks.
  2) Generators provide an easier way to implement iterators.
  3) Generators execute its code only when required.
  4) Generators are memory efficient.

https://javascript.info/generators
