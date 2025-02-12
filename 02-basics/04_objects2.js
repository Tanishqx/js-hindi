// Constructor or singleton object method

// const tinderUser = new Object();

// const tinderUser = {}
// tinderUser.name = 'Tom'
// tinderUser.age = 25
// tinderUser.id = 'tinder123'

// console.log(tinderUser);
const userTwo = {
    email: 'guy@google',
    fullname: {
        firstName: 'Guy',
        lastName: 'Doe',
    },
    location: 'USA',
} 
// console.log(userTwo.fullname);

/* ***** To merge objects ******* */
const obj1 = {1: 'a', 2: 'b'};
const obj2 = {3: 'c', 4: 'd'};
const obj4 = {5: 'e', 6: 'f'};

// const obj3 = {obj1, obj2};
// const obj3 = Object.assign({}, obj1, obj2, obj4); // curly braces is Target object, obj1, obj2 and obj4 are source objects. 
const obj3 = {...obj1, ...obj2, ...obj4}; // spread operator (most used syntax)
// console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' } after merging obj1 and obj2

const users = [
    {
        id: 1,
        name: 'John'
    },
    {
        id: 2,
        name: 'Doe'
    }
] // array of objects 

// console.log(users[0].name);
// console.log(userTwo)
// console.log(Object.keys(userTwo)) // [ 'email', 'fullname', 'location' ]
// console.log(Object.values(userTwo)); // [ 'guy@google', { firstName: 'Guy', lastName: 'Doe' }, 'USA' ]
// console.log(Object.entries(userTwo)); // [ [ 'email', 'guy@google' ], [ 'fullname', { firstName: 'Guy', lastName: 'Doe' } ], [ 'location', 'USA' ] ]

/****************** Destructuring of objects ************************* */

const course = {
    courseName: 'React',
    duration: '2 months',
    price: '$99',
    location: 'India'
}

// course.courseName 

const {courseName} = course // destructuring or simply extracting the value of courseName from course object

console.log(courseName); 

const {courseName: name, duration, price, location} = course; // renaming the courseName to name
console.log(name, duration, price, location);

// {
//     "name": "React",
//     "duration": "2 months",
//     "price": "$99",
//     "location": "India"
// } // JSON format 