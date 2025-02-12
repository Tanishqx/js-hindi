// console.log('T');
// console.log('A');
// console.log('N');
// console.log('I');
// console.log('S');
// console.log('H');
// console.log('Q');
// to make it easier to read, we can use function to print the above lines.

function sayMyName() {
    console.log('T');
    console.log('A');
    console.log('N');
    console.log('I');
    console.log('S');
    console.log('H');
    console.log('Q');
} // function declaration; function is a block of code that can be called by name. This block of code can be defined once and executed any number of times. It's syntax is: function functionName() { // code to be executed }

// sayMyName(); // function call; to execute the function, we need to call it by its name followed by parenthesis.
// sayMyName // function reference; to refer to the function without calling it, we can use the function name without parenthesis.

// function addTwoNumbers (number1, number2) {
//     console.log(number1 + number2);
// } // function declaration with parameters; function can accept parameters (inputs) and can return a value. Parameters are the variables that are defined in the function definition. Arguments are the values that are passed to the function when it is called.

function addTwoNumbers (number1, number2) {
    // let result = number1 + number2
    // return result // return statement; to return a value from a function, we can use the return statement. The return statement ends the function execution and specifies the value to be returned by the function.
    return number1 + number2 
}

// addTwoNumbers(2, 3) // 5
// addTwoNumbers(5, "5") // 55 (concatenation) because JavaScript is a loosely typed language. It will try to convert the string to number and if it fails, it will concatenate the two strings.

const result = addTwoNumbers(3, 5);
// console.log("Result: ", result); 

function loginUserMessage (username) {
    if (!username) {
        return "Please provide a username.";
    }
    return `${username} is logged in.`;
}

// console.log(loginUserMessage("Tanishq")); // Tanishq is logged in. 
// console.log(loginUserMessage()); // undefined is logged in, because function is expecting a parameter 

// function calculateCartPrice (...num1) { // rest parameter; to accept any number of arguments
//     return num1 
// } 
// console.log(calculateCartPrice(100, 200, 300, 400)); // [100, 200, 300, 400]

function calculateTotalPrice (val1, val2, ...num2) {
    return num2 
}

// console.log(calculateTotalPrice(100, 200, 300, 400, 500)); // [300, 400, 500]

const user = {
    username: 'Tanishq',
    id: 449,
    rank: 'Gold'
}

function getUserDetails (user) {
    console.log(`Username ${user.username} with ID ${user.id} has a rank of ${user.rank} `);   
}
// getUserDetails(user)
getUserDetails({
    username: 'Tanishq',
    id: 449,
    rank: 'Gold'
}) 

const myNewArray = [200, 300, 100, 400, 500];

function returnSecondValue (getArray) {
    return getArray[3]
}

console.log(returnSecondValue(myNewArray)); // 400
