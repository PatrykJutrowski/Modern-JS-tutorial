We will learn today about Symbols
Symbol is a primitive data type of JavaScript, along with string, number, boolean, null and undefined And also symbols are not objects.
Symbol is always unique that means if we create many symbols with the same description they will be always different values.
You can never recreate a symbol unless you have the exact reference to it.
You may be wondering why the Symbol() function doesn’t use the new keyword to create a new symbol.
You wouldn’t write const symbol = new Symbol() because Symbol() is a function, not a constructor.
You would expect symbols to behave like number- or string-type primitives, 
but they behave like objects from this point of view because each symbol has a unique identity.
https://javascript.info/symbol
