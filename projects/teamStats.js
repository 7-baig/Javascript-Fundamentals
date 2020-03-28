// PROJECT GOALS
// Team Stats
// We want to create and extract information about your favorite sports team. Basketball,
// soccer, tennis, or water polo, you pick it. It’s your job to create data using the
// JavaScript data structures at your disposal: arrays, objects, etc.
// Once created, you can manipulate these data structures as well as gain insights from
// them. For example, you might want to get the total number of games your team has played,
// or the average score of all of their games.

const team = {
// Players    
    _player: [
        {
            firstName: 'Saad',
            lastName: 'Baig',
            age: 19
        },
        {
            firstName: 'John',
            lastName: 'Anderson',
            age: 18
        },
        {
            firstName: 'Shane',
            lastName: 'Watson',
            age: 38
        }
    ],
// getter method for players
    get player() {
        return this._player.forEach(function(arr) {
            console.log(`${arr.firstName} ${arr.lastName}`)
        }
        )
    },

// Games    
    _games: [
        {
            opponent: 'England',
            teamPoints: 100,
            opponentPoints: 50
        },
        {
            opponent: 'Australia',
            teamPoints: 50,
            opponentPoints: 80
        },
        {
            opponent: 'New Zealand',
            teamPoints: 150,
            opponentPoints: 140
        }
    ],
// getter method for games 
    get games() {
        
    },    
// method to add a new player
    addPlayer(firstName, lastName, age) {
        const player = {
            firstName,
            lastName,
            age
        }
        return this._player.push(player);
    },
// method to add a new game
    addGame(opponent, teamPoints, opponentPoints) {
        const game = {
            opponent,
            teamPoints,
            opponentPoints
        }
        return this._games.push(game);
    }
};

team.addGame('Japan', 200, 20);
team.addPlayer('Jack', 'Sparrow', 55);
team.player;
