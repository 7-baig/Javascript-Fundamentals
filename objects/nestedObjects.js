// In application code, objects are often nested— an object might have another object 
// as a property
// which in turn could have a property that’s an array of even more objects!

//  SPACESHIP
let spaceship = {
  passengers: null,
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 
let capFave = spaceship.crew['captain']['favorite foods'][0];
spaceship.passengers = [
  {
    name: 'saad',
    age: 19,
    country: 'Pakistan'
  },
  {
    name: 'john',
    age: 18,
    country: 'Australia'
  }
]
let firstPassenger = spaceship.passengers[0];

//  BUSES
let buses = {
    firstBus: {
        number: 01,
        passengers: {
            saad: {
                age: 19,
                team: "wrestling"
            },
            john: {
                age: 18,
                team: "cricket"
            }
        }
    },
    secondBus: {
        number: 02,
        passengers: {
            jack: {
                age: 19,
                team: "wrestling"
            },
            rose: {
                age: 18,
                team: "hockey"
            }
        }        
    },
    thirdBus: {
        number: 03,
        passengers: {
            robin: {
                age: 16,
                team: "football"
            },
            taylor: {
                age: 20,
                team: "wrestling"
            }
        }        
    }
}
console.log(buses);



