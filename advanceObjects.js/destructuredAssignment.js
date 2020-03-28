const vampire = {
    name: 'Dracula',
    residence: 'Transylvania',
    preferences: {
      day: 'stay inside',
      night: 'satisfy appetite'
    }
};

// =========== BEFORE ==========>
const residence = vampire.residence; 
console.log(residence); // Prints 'Transylvania' 
// =========== AFTER ===========>
const { residence } = vampire; 
console.log(residence); // Prints 'Transylvania'
// ================== Other example ==============>
const robot = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
      beep() {
        console.log('Beep Boop');
      },
      fireLaser() {
        console.log('Pew Pew');
      },
    }
};
const {functionality} = robot;
functionality.beep()
