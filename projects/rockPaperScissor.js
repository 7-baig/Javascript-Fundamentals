const getUserChoice = userInput => {
    userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
    }
    else {
      console.log('Error');
    }
  }
  const getComputerChoice = () => {
    let num = Math.floor(Math.random() * 3);
    switch (num) {
      case 0:
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2:
        return 'scissors';
        break;
    }
  }
  const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice) {
      return "game tied";
    }
    if(userChoice === 'rock') {
      if(computerChoice === 'paper') {
        return "Computer Won";
      }
      else {
        return "User Won";
      }
    }
    if(userChoice === 'paper') {
      if(computerChoice === 'scissors') {
        return 'Computer Won'
      }
      else {
        return 'You Won!';
      }
    }
    if(userChoice === 'scissors') {
      if(computerChoice === 'rock') {
        return 'Computer won'
      }
      else {
        return 'User won'
      }
    }
  }
  const playGame = () => {
    let userChoice = getUserChoice('rock');     let compChoice = getComputerChoice('paper');
    console.log(`The user threw ${userChoice}`);
    console.log(`The Computer threw ${compChoice}`);
  console.log(determineWinner(userChoice, compChoice))
  }
  playGame();
  
  
  
// Make this game better by adding a secret cheat code. 
// If a user types 'bomb' as their choice, then make sure they win, 
// no matter what.
