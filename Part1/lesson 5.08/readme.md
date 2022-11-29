WeakMap and WeakSet:
 A WeakMap accepts only objects as keys,
 WeakMap objects doesn't avert garbage collection if there are no references to the object which is acting like a key.
 WeakSet is a collection of objects that are unique from each other but differs because
 WeakSet can only store objects and cannot contain arbitrary values of any type like strings or numbers.
Ultimately, as the name suggests, WeakSets are indeed weak, meaning they use weak references.
If you need to store additional data temporarily and don’t want to worry about cleaning up the memory or how the objects are removed,
then using weak references is an absolute lifesaver.
But, it’s not likely that you will regularly need to use WeakMaps, WeakSets, or even weak references regularly in JavaScript.
https://javascript.info/weakmap-weakset
