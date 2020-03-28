// So far we’ve been creating objects individually, but there are times where we
// want to create many instances of an object quickly. Here’s where factory functions come
// in. A factory function is a function that returns an object and can be reused
// to make multiple object instances. Factory functions can also have parameters allowing
// us to customize the object that gets returned.
const monsterFactory = (name, age, energySource, catchPhrase) => {
    return { 
      name: name,
      age: age, 
      energySource: energySource,
      scare() {
        console.log(catchPhrase);
      } 
    }
};
const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare(); // 'BOO!'
//
// ======================>
//
const robotFactory = (model, mobile) => {
    return {
      model: model,
      mobile: mobile,
      beep() {
        console.log('Beep Boop')
      }
    }
  }
  const tinCan = robotFactory('P-500', true);
tinCan.beep()