// ES6 introduced some new shortcuts for assigning properties to 
// variables known as destructuring.
// We had to assign each property a key and value even though the key name
// was the same as the parameter name we assigned to it.
// Imagine if we had to include more properties, that process would quickly become
// tedious! But we can use a destructuring technique, called property value shorthand,
// to save ourselves some keystrokes. 

// ====== BEFORE ========>
const monsterFactory = (name, age) => {
    return { 
      name: name,
      age: age
    }
};
// ====== AFTER ========>
const monsterFactory = (name, age) => {
    return { 
      name,
      age 
    }
};
