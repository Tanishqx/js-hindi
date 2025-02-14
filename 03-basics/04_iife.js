// Immediately Invoked Function Expression (IIFE)

(function game () {
    // named IIFE
    console.log(`DB connected`);   
})(); // global scope pollution is avoided by using IIFE 

( () => {
    // unnamed IIFE
    console.log(`DB connected with arrow function`);   
}) (); 
     
