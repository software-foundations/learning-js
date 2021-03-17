var a = 10 // global variable

let b = 8 // local/scope variable

var a = 20 // var varible can be redefined at the scope it was declared
// let b = 9 // let variable cannot be redefinedat the scope it was declared
b = 9

console.log(a, b)

a = 300

b = 400

console.log(a, b)

const c = 500

// c = 5 // will raise an error

console.log(c)