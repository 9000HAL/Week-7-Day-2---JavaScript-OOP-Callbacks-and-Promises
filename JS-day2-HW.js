//==================Exercise #1 ============================================//

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





    








  
  
//CONSOLE OUTPUT
/*

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
