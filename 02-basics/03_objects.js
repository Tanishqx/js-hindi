// singleton
// Object.create

const { is } = require("express/lib/request");

// object literals method
const mySym = Symbol('key1');

const userOne = {
    name: "Tanishq",
    age: 20,
    [mySym]: 'mykey1',
    email: 'tanishq@google',
    location: 'India',
    isLoggedIn: false,
    courses: ['React', 'Node', 'MongoDB'],
}

// console.log(userOne);
// console.log(typeof userOne);
// console.log(userOne.name); // dot notation 
// console.log(userOne['name']); // bracket notation
// console.log(userOne['isLoggedIn']);
// console.log(userOne['courses']);
// console.log(userOne[mySym]);

// userOne.email = 'tanishq@chatgpt';
// Object.freeze(userOne);
// userOne.email = 'tanishq@micro';
// console.log(userOne);

userOne.greeting = function () {
    console.log(`hello ${this.name}`);
}
console.log(userOne.greeting());
