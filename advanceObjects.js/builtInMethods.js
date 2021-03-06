////============================ Object.assign() ==============================////
//
// Copies the values of all enumerable own properties from one
// or more source objects to a target object.
// Input : var obj1 = { a: 10 };
//         var new_obj = Object.assign({}, obj1);
//         console.log(new_obj);
// Output : Object { a: 10 }
//
// Explanation: Here in this example the properties of object
// "obj1" i.e. { a: 10 } is copied to the target object "new_obj".
//
// Input : var obj1 = { a: 10 };
//         var obj2 = { b: 20 };
//         var obj3 = { c: 30 };
//         var new_obj = Object.assign({}, obj1, obj2, obj3); 
//         console.log(new_obj);
// Output : Object { a: 10, b: 20, c: 30 }
//
// Explanation: Here in this example the properties of three source
// objects "obj1, obj2, obj3" are copied to the target object "new_obj".
//
// Input : var obj1 = { a: 10, b: 10, c: 10 };
//         var obj2 = { b: 20, c: 20 };
//         var obj3 = { c: 30 };
//         var new_obj = Object.assign({}, obj1, obj2, obj3);
//         console.log(new_obj); 
// Output : Object { a: 10, b: 20, c: 30 }
//
// Explanation: Here in this example the properties of three source
// objects "obj1, obj2, obj3" are copied to the target object "new_obj"
// and the target object gets the overwritten values.
//
Object.create()
// Creates a new object with the specified prototype object and properties.
Object.defineProperty()
// Adds the named property described by a given descriptor to an object.
Object.defineProperties()
// Adds the named properties described by the given descriptors to an object.
Object.entries()
// Returns an array containing all of the [key, value] pairs of a given object's own enumerable string properties.
Object.freeze()
// Freezes an object. Other code cannot delete or change its properties.
Object.fromEntries()
// Returns a new object from an iterable of [key, value] pairs. (This is the reverse of Object.entries).
Object.getOwnPropertyDescriptor()
// Returns a property descriptor for a named property on an object.
Object.getOwnPropertyDescriptors()
// Returns an object containing all own property descriptors for an object.
Object.getOwnPropertyNames()
// Returns an array containing the names of all of the given object's own enumerable and non-enumerable properties.
Object.getOwnPropertySymbols()
// Returns an array of all symbol properties found directly upon a given object.
Object.getPrototypeOf()
// Returns the prototype(internal [[Prototype]] property) of the specified object.
Object.is()
// Compares if two values are the same value. Equates all NaN values (which differs from both Abstract Equality Comparison and Strict Equality Comparison).
Object.isExtensible()
// Determines if extending of an object is allowed.
Object.isFrozen()
// Determines if an object was frozen.
Object.isSealed()
// Determines if an object is sealed.
Object.keys()
// Returns an array containing the names of all of the given object's own enumerable string properties.
Object.preventExtensions()
// Prevents any extensions of an object.
Object.seal()
// Prevents other code from deleting properties of an object.
Object.setPrototypeOf()
// Sets the object's prototype (its internal [[Prototype]] property).
Object.values()
// Returns an array containing the values that correspond to all of a given object's own enumerable string properties.
