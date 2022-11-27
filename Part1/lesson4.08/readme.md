Object to primitive conversion:
Now it’s time to find out what will happen if you add objects obj1 + obj2,
subtract obj1 - obj2, or print using alert(obj). In such a case, objects will be auto-converted to primitives,
after which the operation will be carried out. Here are the main rules for numeric, string, and boolean conversions of objects:
Overall objects are considered true in a boolean conversion. There are merely string and numeric conversions.
The numeric conversions take place when subtracting objects or applying mathematical functions.
String conversion happens when we output an object like alert(obj) and in contexts like that.
To do conversion Javascript tries to find all and call three object methods:
Call obj[Symbol.toPrimitive](hint) if the method exists.
Otherwise if hint is "string"
try obj.toString() and objValueOf(), whatever exists.
Otherwise if hint is "number" or "default".
try obj.ValueOf() and obj.toString, whatever exists
hints = Function hints allow to lookup known JavaScript function parameters and description without looking in the documentation or code.
https://javascript.info/object-toprimitive
