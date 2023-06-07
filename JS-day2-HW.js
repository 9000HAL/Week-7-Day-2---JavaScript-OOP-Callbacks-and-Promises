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
// ***** CURRENTLY INCOMPLETE / FURTHER STUDYING TONIGHT *****





// And answer 2 code wars problems for tonight as well. 
// One that you've done previously in python, one that you have not yet done. 
// All must be produced in JavaScript.


//==================CODEWARS Problem #1 ==========// ---> "done previously in python"

// CODEWARS/PYTHON PROBLEM #1 LINK: https://www.codewars.com/kata/reviews/54272ba8e80d824cb80001f7/groups/54272ba8e80d824cb80001f9

// DEFINE the function to transform a number to a string
function numberToString(num) {
    // Convert the number to a string using the String() function
    // and return the resulting string
    return String(num);
  }
  
  // Call the function and assign the returned string to a variable
  var result = numberToString(123);
  
  // Print the output
  console.log(result);


//Console Output:
/*
"123"
*/




//==================CODEWARS Problem #2 ==========// ---> "one that you have not yet done"

// CODEWARS/JavaScript *NEW* PROBLEM #2 LINK: https://www.codewars.com/kata/reviews/53dc23d121a252d19500007d/groups/53dc48ee2259ed51ef00064b

//Sentence Smash
//Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. 
//You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. 
//Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// DEFINE the function to smash words into a sentence
function smash(words) {
    // Array.join() to concatenate the words with spaces in between
    // return the resulting sentence
    return words.join(" ");
  }
  
  // TEST the function with an example array of words
  var wordsArray = ["Hello", "world", "this", "is", "a", "sentence"];
  
  // CALL the function and ASSIGN the returned sentence to a variable
  var sentence = smash(wordsArray);
  
  // PRINT the output
  console.log(sentence);
  

//Console Output:
// "Hello world this is a sentence"
