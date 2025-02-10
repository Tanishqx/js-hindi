// Primitive datatypes
/* 7 types: String, Number, Boolean, Bigint, Undefined, null, symbol */

const score = 123
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log( id === anotherId);

const bigNumber = 372846783252354n

// Reference (Non primitive)

// Array, Objects, Functions 

const heros = ["ironman", "spiderman", "shaktiman"]; // array

// object
let myObj = {
    name: "tanishq",
    age: 21
}

// function 
const myFunction = function myFunc() {
    console.log("Hello world ");
 }

// console.log(typeof myObj);
// console.log(typeof bigNumber);
// console.log(typeof heros);
// console.log(typeof myFunction);

// ************************************* Memory Allocation ***************************************************

// Stack (Primitive), Heap (Non-Primitive)

let myName = "Tanishq"
let secretName = myName

secretName = "daniel"

console.log(myName);
console.log(secretName);

let userOne = {
    email: "user@google.com",
    upi: "user@hdfc"
}

let userTwo = userOne