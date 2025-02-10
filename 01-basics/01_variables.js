const accountId = 1234 // constant value do not change
let accountMail = "Tanishq@gmail.com"  // you can declare variable by 2 ways : let or var
var accountPassword = "23143" 
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed

// curly braces is known as scope
/*
Note: Prefer not to use var because of issue in block scope and functional scope
*/

accountMail = "tan@gmail.com" // variable value can be changed 
accountPassword = "2123"
accountCity = "Bangalore"


console.log(accountId)
console.table([accountId, accountMail, accountPassword, accountCity, accountState])