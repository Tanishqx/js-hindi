// const coding = ['js', 'ruby', 'java', 'python']

// const values = coding.forEach( (item) => {
//     console.log(item)
//     return item 
// })
// console.log(values)

const myNums = [1, 2, 3, 4, 5, 6, 8, 9]

// const newNums = myNums.filter( (num) => num > 4)
// console.log(newNums);

// const newNums = myNums.filter( (num) => {
//     return num > 4
// })

// console.log(newNums)

// const newNums = 
const newNums = []

myNums.forEach ( (num) => {
    if (num > 3){
        newNums.push(num)
    }
})
console.log(newNums)
