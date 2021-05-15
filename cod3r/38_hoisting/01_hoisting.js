// Variables declared with var suffer hoisting (moves the declaration to the top)

console.log('a = ', a)
var a = 3
console.log('a = ', a)

// What happens underneath the cloths
// var a
// console.log('a = ', a)
// a = 3
// console.log('a = ', a)

// Inside function ...

function myTest() {
	// The hoisting happens inside function scope
	console.log('a = ', a)
	var a = 3
	console.log('a = ', a)
}

myTest()

// Variables declares with let

// console.log('b = ', b) // ReferenceError: Cannot access 'b' before initialization
//**************************
// console.log('b = ', b) // ReferenceError: b is not defined
// let b = 3

let b = 10
console.log('b = ', b) // ReferenceError: b is not defined
