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

  
//CONSOLE OUTPUT
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




//CONSOLE OUTPUT
//








//==================CODEWARS Problem #1 ==========//

// CODEWARS/PYTHON PROBLEM #1 LINK: 


//Console Output:








//==================CODEWARS Problem #2 ==========//

// CODEWARS/PYTHON PROBLEM #2 LINK: 

//Console Output:
