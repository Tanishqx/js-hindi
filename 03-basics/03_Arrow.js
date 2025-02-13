const user = {
    username: "Tanishq",
    id: 449,

    welcomeMessage: function () {
        console.log(`Welcome ${this.username}!`);
    }
}
// user.welcomeMessage()
// user.username = 'ken'
// user.welcomeMessage()

// console.log(this) // {} // global object in node js and window object in browser 

// function chai () {
//     let username = 'tanishq'
//     console.log(this.username) // {} // global object in node js and window object in browser 
// }       
// chai()

// const chai = () => {
//     let username = 'Tanishq'
//     console.log(this.username) // {} // global object in node js & window object in browser 
// }
// chai () 

const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(5, 7)); // 12 

const addThree = (num1, num2, num3) => (num1 + num2 + num3) // implicit return; if the function body has only one statement, we can omit the curly braces and the return keyword. The value of the statement will be returned. We don't need to use the return keyword.

const addTwoNumbers = (num1, num2) => ({username: 'tanishq'}) 

myNewArray.forEach(function ())