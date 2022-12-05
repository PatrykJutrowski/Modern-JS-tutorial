Custom errors, extending Error:  
There are many types of errors in JavaScript, namely:

1) Error
2) EvalError
3) InternalError
4) RangeError
5) ReferenceError
6) SyntaxError
7) TypeError
8) URIError

In your code you'll mostly use Error and TypeError, two of the most common types, to create your own error object.

Most of the times, the majority of errors will come directly from the JavaScript engine, like InternalError or SyntaxError.

What is an exception?	

Most developers think that error and exceptions are the same thing. In reality, an error object becomes an exception only when it's thrown.

To throw an exception in JavaScript we use throw, followed by the error object.

https://javascript.info/custom-errors
 
