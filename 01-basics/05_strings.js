const name = "Tanishq "
const age = 22

// console.log(name + age); // outdated way to do concatenation of strings

console.log(`Hello my name is ${name} and my age is ${age}`); // this syntax is modern way known as string interpolation

const gameName = new String('Tanishqc');

// console.log(gameName);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));

// console.log(gameName.indexOf("i"));

const newString = gameName.substring(1, 5);
// console.log(newString);

const anotherString = gameName.slice(-9, 4);
// console.log(anotherString);

const stringTwo = "      Tanishq     "
// console.log(stringTwo);
// console.log(stringTwo.trim());

const url = "https://tanishq.com/983jernhja"

// console.log(url.replace('83', 'include'));

// comparing strings 
// const a = "a";
// const b = "b"
// if(a < b) {
//     console.log(`${a} is less than ${b}`);
// } else if(a > b) {
//     console.log(`${a} is greater than ${b}`);
// } else {
//     console.log(`${a} is equal to ${b}`);
// }

const str1 = new String("2 + 2")
console.log(str1);

