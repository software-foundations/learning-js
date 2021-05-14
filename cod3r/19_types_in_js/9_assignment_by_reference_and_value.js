// Assignment by value != Assignment by reference

// variable 'a' storage the memory address to {name: 'Test'} object
const a = {name: 'Test'}

// variable 'b' storage the memory address to {name: 'Test'} object
// So, b and a point to the same memory address, so storage the same pointer
const b = a

console.log(a)
console.log(b)


b.name = 'Something'

console.log(a)
console.log(b)

// So, the example above is assignment by reference

/* ********************************* */
// Assignment by value
// Primitive types are assigned by value
/*
 * Number
*/

let c = 3
let d = c

console.log(c, d)

d++

console.log(c, d)