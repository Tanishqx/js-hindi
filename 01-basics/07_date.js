// Dates

let myDate = new Date()
// console.log(myDate);
console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.getTime());
// console.log(typeof myDate.getTime());

let myCreatedDate = new Date(2020, 2, 22)
// console.log(myCreatedDate.toString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);

let newDate = new Date();
console.log(newDate);
console.log(newDate.getFullYear());
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());

console.log(`${newDate.getDay()} and time is ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`); // getDay() returns the day of the week as a number (0-6) where 0 is Sunday and 6 is Saturday