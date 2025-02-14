// if

// if () {

// }

// <, >, <=, >=, ==, ===, !=, !== operators are used to compare values and return a boolean value. 

const age = 18
if (age >= 18) {
    let username = 'tanishq'
    // console.log(`${username} is eligible to vote`)
} // tanishq is eligible to vote

// console.log(username) // ReferenceError: username is not defined because username is block scoped

const balance = 1000

// if (balance > 500) console.log(`You can withdraw money`); // implicit return;

// if (balance < 500) {
//     console.log(`Balance less than minimum balance required`);   
// } else if (balance < 750) {
//     console.log(`Balance less than 750`);
// } else if (balance < 1000) {
//     console.log(`Balance less than 1000`);
// } else {
//     console.log(`You can withdraw money`);
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow to purchase course");
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User logged in successfully");
}
