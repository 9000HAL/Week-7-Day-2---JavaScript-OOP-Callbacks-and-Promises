//==================Exercise #1 ============================================//

/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:


let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
*/


// DEFINE function to display favorite food dishes
function displayFavoriteDishes(person) {
    // LOOP over properties of the object
    for (let key in person) {
        // CHECK of the property value is an array
        if (Array.isArray(person[key])) {
            // LOG each item in the array
            console.log(`Favorite ${key}:`);
            person[key].forEach(function(item) {
                console.log(item);
            });
        } else {
          // LOG the property value directly
          console.log(`Favorite ${key}: ${person[key]}`);
        }
    } 

}

// DEFINE the person3 object
let person3 = {
  pizza: ["Deep Dish", "South Side Thin Crust"],
  tacos: "Anything not from Taco bell",
  burgers: "Portillos Burgers",
  ice_cream: ["Chocolate", "Vanilla", "Oreo"],
  shakes: [
    {
      oberwise: "Chocolate",
      dunkin: "Vanilla",
      culvers: "All of them",
      mcDonalds: "Sham-rock-shake",
      cupids_candies: "Chocolate Malt",
    },
  ],
};

// CALL the function with person3 object
displayFavoriteDishes(person3);

  
//CONSOLE OUTPUT:
/*
Favorite pizza:
Deep Dish
South Side Thin Crust
Favorite tacos: Anything not from Taco bell
Favorite burgers: Portillos Burgers
Favorite ice_cream:
Chocolate
Vanilla
Oreo
Favorite shakes:
[object Object]

***** GABE NOTE: OOPS the "Favorite shakes" output here is something i need to figure out/fix next *****
*/




//============Exercise #2 ============//

/*
Write an Javascript Class for a Person that has:
a name 
and age, 
has a printInfo method, 
and also has a method that increments the persons age by 1 each time the method is called
Create two people using the 'new' keyword, 
and print both of their infos 
and increment one persons age by 3 years
Use an arrow function for both methods
*/
// Create our Person Class
// Use an arrow to create the printInfo method
// Create another arrow function for the addAge method that takes a single parameter adding to the age 


// DEFINE the Person class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // ARROW function for the printInfo method
    printInfo = () => {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
    };

    // ARROW function for the addAge method
    addAge = (years) => {
        this.age += years;
    };

}

//Create two Person objects
const person1 = new Person('Gabe', 52);
const person2 = new Person('Melody', 40);

// PRINT the info for both persons
person1.printInfo();
person2.printInfo();

// INCREMENT person1's age by 3 years
person1.addAge(3);

// PRINT info for person1 after incrementing age
person1.printInfo();


//CONSOLE OUTPUT:
/*
"Name: Gabe"
"Age: 52"
"Name: Melody"
"Age: 40"
"Name: Gabe"
"Age: 55"
*/




// ============= Exercise #3 ============//
/*
    Using the Ergast API, fetch to 'http://ergast.com/api/f1/2008/5/driverStandings.json'
    handle the promise with callbacks (.then(), .catch()) or async/await, and log the data.
*/








//==================CODEWARS Problem #1 ==========//

// CODEWARS/PYTHON PROBLEM #1 LINK: 


//Console Output:








//==================CODEWARS Problem #2 ==========//

// CODEWARS/PYTHON PROBLEM #2 LINK: 

//Console Output:
