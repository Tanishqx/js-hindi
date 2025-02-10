let score = 200
// console.log(score);


const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 23.322


// console.log(otherNumber.toPrecision(3));

const hundreds = 100000000
// console.log(hundreds.toLocaleString());

// ************ Math *************

// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.round(4.7));
// // console.log(Math.abs(-4.7));
// console.log(Math.ceil(4.7));
// console.log(Math.floor(4.7));
// console.log(Math.pow(2, 3));
// console.log(Math.sqrt(16));
// console.log(Math.min(2, 3, 4, 5));
// console.log(Math.max(2, 3, 4, 5));
console.log(Math.random()); // values are between 0 and 1
console.log(Math.floor(Math.random() * 10) + 1); // values are between 1 and 10

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // values are between 10 and 20 inclusive of 10 and 20 