const userEmail = []

// if (userEmail) {
//     console.log('You are logged in');
// } else {
//     console.log('Please log in');
// }


// falsy values

// false, 0, "", null, undefined, NaN, BigInt 0n; // these are falsy values in JavaScript

// truthy values
true, 1, " ", [], {}, function () {}, "0", "false" // these are truthy values in JavaScript

if (userEmail.length === 0) {
    // console.log('Array is empty');
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    // console.log('Object is empty');
}

// Nullish Coalescing Operator (??): It is used to check if a value is null or undefined. If the value is null or undefined, it will return the value on the right side of the operator. If the value is not null or undefined, it will return the value on the left side of the operator. 

let user1;
// user1 = 5 ?? 10 // 5 
// user1 = null ?? 10 // 10
// user1 = undefined ?? 10 // 10
console.log(user1);

// Ternary Operator: It is used to write conditional statements in a single line. It is a shorthand for if-else statements.

// condition ? expression1 : expression2

const iceTea = 100
iceTea >= 80 ? console.log('You can buy ice tea') : console.log('You cannot buy ice tea')
