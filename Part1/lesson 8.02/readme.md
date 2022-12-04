avaScript allows creating objects using a constructor function, like the new F().
Once F.prototype is an object, the new operator may use it for setting [[Prototype]] for the new object.
Please, take into consideration that here F.prototype means an ordinary property, known as "prototype" on F. It may sound similar to the term "prototype." Still, here it is intended an ordinary property with this name.
You can use the F.prototype property only in case the new F is called. It can assign the [[Prototype]] of the new object. 
Then, no connection between the F.prototype and the new object can be found.
We can describe it as a "one-time present."
In case, after creating, F.prototype property changes, (F.prototype = <another object>).
Afterward, new objects that the new F has created may have another object, such as [[Prototype]]. But the objects that already exist keep the old one.
  https://javascript.info/function-prototype
