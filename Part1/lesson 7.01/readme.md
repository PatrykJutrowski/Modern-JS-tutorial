Property flags and descriptors -
writable – if true, the value can be changed, otherwise it’s read-only.
enumerable – if true, then listed in loops, otherwise not listed.
configurable – if true, the property can be deleted and these attributes can be modified, otherwise not.
Object.getOwnPropertyDescriptor()-method returns an object describing the configuration of a specific property on a given object
(that is, one directly present on an object and not in the object's prototype chain).
The object returned is mutable but mutating it has no effect on the original property's configuration.
The static method Object.defineProperty() defines a new property directly on an object,
or modifies an existing property on an object, and returns the object.
https://javascript.info/property-descriptors
