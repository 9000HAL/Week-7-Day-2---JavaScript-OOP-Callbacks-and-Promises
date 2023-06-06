console.log('testing')


// additional control flow concept, switch statements
/* Syntax: 
switch(expression) {
    case a:
        code block
        break;
    case b:
        code block
        break;
    default:
        // code block
} 
*/

// ---------- let num = 11


// -----------see RECORDING----------switch('tuesday') 














// JS Objects (Python Dicts)

// const person -----------SEE REC'g



// access data in objects (using bracket or dot notation)


console.log(person['age'])




// Inclass Exercise #1 (Get the Value 'Manchester United')
const person2 = {
    name: "Max",
    age: 31,
    prog_languages: ["JavaScript", "Python", "C++", "Java"],
    fav_color: "Blue",
    teams: [
      {
        baseball: "Chicago White Sox",
        football: "Chicago Bears",
        hockey: "Chicago Blackhawks",
        basketball: ["Chicago Bulls", "Chicago Sky"],
        soccer: ["Chicago Fire", "Naperville Yellowjacks"],
      },
      {
        baseball: "Toronto Bluejays",
        football: "LA Rams",
        basketball: "Milwalkee Bucks",
        soccer: ["Manchester United", "Liverpool"],
      },
    ],
  };

// Solution Here:

// console.log(person2.teams[1].soccer[0]) ----------------_--SEE REC'g



// JS Object methods ((Object.keys(object), Object.values(object))
// console.log(Object) ---rec'g



// looping an object using for in
// for in: iterates over keys in object or indices in an array
for(let key in person2)


// ---------- Creating a JS Class ----------
class Team {
  constructor(){}
    this.
}


// Creating an instance
const team1 = new Team('LA', 'Lakers')
console.log(team1.printInfo())

// Inheriting from a class using 'extends'
class Player extends Team {


}

// ---------- JS Closures ----------

let grandpa = 'grandpa'



// ---------- JS Promises ----------
/*
A promise is something that will take time to do.
There are two possible outcomes of a promise
-- Resolve/Fulfilled = Success
-- Reject = Error
*/

// returns a pending promise
// console.log(fetch('https://pokeapi.co/api/v2/pokemon/ditto'))

// 2 ways to handle promises
// first way using callbacks: .then(resolved) / .catch(reject) --------> "CALLBACK HELL" -----SEE REC'g
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
.then(() => {})

// handle pending promise with .then(), .catch()

// viewing our data if promise resolved: 200 status code

// Second way: Using async/await (ES6) ---- NEWER WAY BELOW/CLEANER WAY
const pokemonData = async () => {



}