// function without return
function printSum(a, b) {
	console.log(a + b)
}

printSum(2, 3) // -> 5
printSum(2) // -> Nan
printSum(2, 3, 4, 5, 6) // -> 5
printSum() // -> Nan

// function with return
function sum(a, b = 1) {
	return a + b
}

console.log(sum(2, 3))
console.log(sum(2))
console.log(sum())

// Storage an arrow function in a variable

const sum2 = (a, b) => {
	return a + b
}

console.log(sum2(2, 3))

// implicit return in arrow functions could be used when
// the body of the arrow function has only one expression

const subtraction = (a, b) => a - b
console.log(subtraction(2, 3))
