let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let numClosedDoors = 3;
let closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';
let botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
let beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
let spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg"
let openDoor1;
let openDoor2;
let openDoor3;
let startBtn = document.getElementById('start');
let currentlyPlaying = true;

let isBot = door => {
    if(door.src === botDoorPath) {
        return true;
    }
    else {
        return false;
    }
}


let isClicked = (door) => {
    if(door.src === closedDoorPath) {
        return false;
    }
    else {
        return true;
    }
}

let playDoor = (door) => {
    numClosedDoors--;
    if(numClosedDoors === 0) {
        gameOver('win');
    }
    else if(isBot(door)) {
        gameOver();
    }
}


// random door generator
let randomChoreDoorGenerator = () => {
    const choreDoor = Math.floor(Math.random() * numClosedDoors);
    if (choreDoor === 0) {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    }
    else if (choreDoor === 1) {
        openDoor2 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } 
    else {
        openDoor3 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor1 = spaceDoorPath;
    }

};


// This function will run whenever the first door image element is clicked.
doorImage1.onclick = () => {

    if(!isClicked(doorImage1) && currentlyPlaying) {
        doorImage1.src = openDoor1;
        playDoor(doorImage1);
}
};
doorImage2.onclick = () => {
    if(!isClicked(doorImage2) && currentlyPlaying) {
        doorImage2.src = openDoor2;
        playDoor(doorImage2);
}

};
doorImage3.onclick = () => {
    if(!isClicked(doorImage3) && currentlyPlaying) {
        doorImage3.src =  openDoor3;
        playDoor(doorImage3);
}    
    
};

   
const startRound = () => {
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    numClosedDoors = 3;
    startBtn.innerHTML = "Good luck!";
    currentlyPlaying = true;
    randomChoreDoorGenerator();
}

startBtn.onclick = () => {
    if (!currentlyPlaying) {
        startRound();
    }
}






let gameOver = (status) => {
    if(status === 'win') {
        startBtn.innerHTML = 'You win! Play again?'
    }
    else {
        startBtn.innerHTML = 'Game Over! Play again?'
    }
    currentlyPlaying = false;
}




// randomChoreDoorGenerator();
startRound()