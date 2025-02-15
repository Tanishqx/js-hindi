
// while (condition) {
//     // code block to be executed as long as the condition is true 
// }

// let index = 0
// while (index <= 10) {
//     console.log(`Value of index: ${index}`);
//     index++
// }

let arrOne = ["Spiderman", "Superman", "Batman", "Ironman", "Thor", "Hulk"]
let i = 0
while (i < arrOne.length) {
    console.log(`Value is ${arrOne[i]}`);
    i = i + 1
}

let score = 1

do {
    console.log(`Score is ${score}`);
} while (score > 10) // do while loop is used to execute a block of code at least once, and then it will check the condition. If the condition is true, it will execute the block of code again.