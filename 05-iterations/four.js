const myObject = {
    js: 'javascript',
    cpp: 'c++',
    py: 'python',
    rb: 'ruby',
}

for (const key in myObject) {
    // console.log(key, myObject[key])
}

const programming = ["js", "rb", "py", "java"]

// for (const key in programming) {
//     console.log(key)
// }

for (const key in programming) {
    console.log(programming[key])
}