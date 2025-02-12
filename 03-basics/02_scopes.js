{} // curly braces are the scope of the file (global scope), 
// they are also used in if statements, loops, functions, etc. 
// when curly braces are used in a function, they are the scope of the function (local scope)  

if(true) {
    let a = 5; // local scope; 
    const b = 20// block scope;let and const are block scoped, they are only available within the block they are defined in.
    var c = 30 // function scope; var is function scoped, it is available throughout the function it is defined in.
}
// console.log(a); // ReferenceError: a is not defined