const weight1 = 1.0
const weight2 = Number ("2.0")

console.log(weight1, weight2)

// Knows if a number is integer

console.log(Number.isInteger(weight1))
console.log(Number.isInteger(weight2))

// Sum numbers

const avaliation1 = 9.4302
const avaliation2 = 4.5235

const total = avaliation1 * weight1 + avaliation2 * weight2
const mean = total / (weight1 + weight2)

console.log(mean.toFixed(4)) // Fixing the decimal levels
console.log(mean.toString()) // casting a numerical value to string
console.log(mean.toString(2)) // casting a numerical value to binary

// Checking types
console.log(mean, typeof mean)
console.log(Number, typeof Number)
