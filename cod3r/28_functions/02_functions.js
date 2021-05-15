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