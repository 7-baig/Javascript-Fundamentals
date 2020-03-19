let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnerAge = 18;


if(runnerAge > 18 && registeredEarly === true) {
  raceNumber = raceNumber + 1000;
}
if (runnerAge > 18 && registeredEarly === true) {
  console.log(`Race will start at 9:30 am and your race number is ${raceNumber}`);
}
else if (runnerAge > 18 && registeredEarly === false) {
  console.log(`Race will start at 11:00 am and your race number is ${raceNumber}`);
}
else if (runnerAge < 18) {
  console.log(`Race will start at 12:30 pm and your race number is ${raceNumber}`);
}
else {
  console.log(`See the registration desk`);
}
