// When the data stored on an object is a function we call that a method.
// A property is what an object has, while a method is what an object does.
// Do object methods seem familiar? That’s because you’ve been using them all
// along! For example console is a global javascript object and .log() is
// a method on that object. Math is also a global javascript object and .floor() 
// is a method on it.
// We can include methods in our object literals by creating ordinary, comma-separated 
// key-value pairs. The key serves as our method’s name, while the value is an anonymous
// function expression.

// ES5
const alienShip = {
    invade: function () { 
      console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
    }
};
// ES6
const alienShip2 = {
    invade () { 
      console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
    }
};

alienShip.invade();
