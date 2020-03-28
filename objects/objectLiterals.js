// We fill an object with unordered data. This data is organized into key-value pairs.
// A key is like a variable name that points to a location in memory that holds a value.
// A key’s value can be of any data type in the language including functions or other objects.
let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
};
// There are two ways we can access an object’s property: 
// dot notation and bracket notation
// We can use either dot notation, ., or bracket notation, [], and the assignment operator,
// = to add new key-value pairs to an object or change an existing property.
// You can delete a property from an object with the delete operator.
delete spaceship.numCrew;


  