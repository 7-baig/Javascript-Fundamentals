                        // ***** PROJECT GOALS ***** //
// In this project, you’ll use JavaScript to randomly create a three-course meal based
// on what is available on a menu. We’ll keep running it until we’re satisfied with the
// generated meal!


const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: []
    },
    // get appetizers() {
      
    // },
    // set appetizers(appetizer) {
      
    // },
    // get mains() {
      
    // },
    // set mains(main) {
      
    // },
    // get desserts() {
      
    // },
    // set desserts(dessert) {
      
    // },
    // get courses() {
    //   return {
    //     appetizers: this.appetizers,
    //     mains: this.mains,
    //     desserts: this.desserts
    //   }
    // },
    
//this will be used to add a new dish to the specified course on the menu.
   
addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        dishName,
        dishPrice
      }
      this._courses[courseName].push(dish);
    },


// this will allow us to get a random dish from a course on the menu, which will be necessary
// for generating a random meal.
    getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
    },


// this will automatically generate a three-course meal for us
    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.dishPrice + main.dishPrice + dessert.dishPrice;
      return `Your meal is ${appetizer.dishName}, ${main.dishName}, ${dessert.dishName} And the total price is ${totalPrice}.`;
    },
  };
  
  menu.addDishToCourse('appetizers', 'Samosas', 5.25);
  menu.addDishToCourse('appetizers', 'Pakora', 5.25);
  menu.addDishToCourse('appetizers', 'Chaat', 5.25);
  menu.addDishToCourse('mains', 'Biryani', 10.15);
  menu.addDishToCourse('desserts', 'Pudding', 2.25);
  
  
  const meal = menu.generateRandomMeal();
  console.log(meal);
  
  
  
  
  
  
  
  
  
  