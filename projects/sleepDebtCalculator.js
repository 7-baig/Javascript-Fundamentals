const getSleepHours = day => {
    switch(day) {
      case 'monday':
        return 8;
        break;
      case 'tuesday':
        return 6;
        break;
      case 'wednesday':
        return 5;
        break;
      case 'thursday':
        return 7;
        break;     
      case 'friday':
        return 9;
        break;  
      case 'saturday':
        return 10;
        break; 
      case 'sunday':
        return 7;
        break;      
    }
}
  // To get the total sleep hours that you actually slept, 
  const getActualSleepHours = () => 
    getSleepHours('monday') +
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday');  
  
  // To get the ideal sleep hours that you prefer,
  const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
  }
  
  // to calculate sleep debt.
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if(actualSleepHours === idealSleepHours) {
      console.log('You get the perfect amount of sleep.') 
  }
    if(actualSleepHours > idealSleepHours) {
      console.log(`You got more sleep than needed.`) 
      console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) more sleep than you needed this week.');
}
    if(actualSleepHours < idealSleepHours) {
      console.log(`You should get some rest.`) 
      console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
    }
}
  
calculateSleepDebt();
  
// For extra practice, try these:

// getActualSleepHours() could be implemented without calling getSleepHours(). 
// Use literal numbers and the + operator to rewrite getActualSleepHours(). 
// It should still return the total actual hours slept in the week.
// Some people need to sleep longer than others. Rewrite getIdealSleepHours() so that 
// you can pass it an argument, like getIdealSleepHours(8) where 8 is the ideal hours 
// per night. Update the call to getIdealSleepHours() in calculateSleepDebt() too.


// Put the daily sleep hours directly into getActualSleepHours().

// const getActualSleepHours = () => 6 + 7 + 9 + 8 + 5 + 10 + 11;

// Make idealHours a parameter and multiply it by 7.

// const getIdealSleepHours = idealHours => idealHours * 7;
// When you call the updated function in calculateSleepDebt(), call it like this:

// const calculateSleepDebt = () => {
//   ...

//   const idealSleepHours = getIdealSleepHours(8);

//   ...
// };
