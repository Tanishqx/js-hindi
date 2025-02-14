{} // curly braces are the scope of the file (global scope), 
// they are also used in if statements, loops, functions, etc. 
// when curly braces are used in a function, they are the scope of the function (local scope)  

if(true) {
    let a = 5; // local scope; 
    const b = 20// block scope;let and const are block scoped, they are only available within the block they are defined in.
    var c = 30 // function scope; var is function scoped, it is available throughout the function it is defined in.
}
function one () {
    const username = "tanishq"
    
    function two () {
        const website = 'youtube'
        console.log(username);
    } 
    // console.log(website); 
    two() 
}
// one() 

if (true) {
    const username = 'tanishq'
    if (username === 'tanishq') {
        const website = ' youtube'
        // console.log(username + website)
    }
    // console.log(website); // ReferenceError: website is not defined because website is block scoped
}
// console.log(username); // ReferenceError: username is not defined because username is block scoped

// *********************** interesting ***********************

console.log(addOne(5)) // 6 
function addOne (num) { // function declaration
    return num + 1
}

addTwo(5) // 7 // TypeError: addTwo is not a function because addTwo is a function expression and it is not hoisted to the top of the file like function declarations are. 
const addTwo = function (num) { // function expression; function is assigned to a variable
    return num + 2
}