In this tutorial we will learn about object references and copying: 
Objects are one of JavaScript's data types.
Objects are used to store key/value (name/value) collections.
A JavaScript object is a collection of named values.
Objects in JavaScript are passed by reference.
When more than one variable is set to store either an object ,
array or function , those variables will point to the same allocated space in the memory.
Example:

String s;
s = "xxx";
The first statement declares a variable s of type String. Such a variable is not initialized yet. The second statement assign to such a variable the reference to the object denoted by "xxx".

Notice that two variables may contain a reference to the same object.

Example:

String s, t;
s = "xxx";
t = s;
After these two statement, both t and s contain a reference to the object denoted by "xxx".
https://javascript.info/object-copy
