// for loop
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// } // for loop is used to iterate over an array or an object. It has three parts: initialization, condition, and increment/decrement.

// for (let i = 0; i <= 10; index++) {
//     const element = index;
//     console.log(element);
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`Table of ${i}: `);

//     for (let j = 1; j <= 5; j++) {
//         // console.log(`${j}`);
//         console.log(`${i} * ${j} = ${i * j}`);
        
//     }
// }

let myArray = ["Tanishq", "Ken", "John", "Doe", "Jane", "Doe"]
// console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}

// break statement is used to exit a loop. It is used in if statements to check a condition and exit the loop if the condition is true. 

// continue statement is used to skip an iteration of a loop. It is used in if statements to check a condition and skip the current iteration if the condition is true.

for (let i = 1; i < 10; i++) {
    
    if (i == 5) {
        console.log(`index found at ${i}`);
        // break
        // continue // skip the current iteration and move to the next iteration
    }
    console.log(`Element: ${i}`);
}