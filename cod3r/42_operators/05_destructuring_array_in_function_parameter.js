function rand([min = 0, max = 1000]) {
	if (min > max) [min, max] = [max, min]
	const value = Math.random() * (max - min) + min
	return Math.floor(value)
}

console.log(rand([50, 40]))
console.log(rand([992])) // passing only min: value
console.log(rand([, 10])) // passing only max: value
console.log(rand([]))
console.log(rand()) // TypeError: undefined is not iterable
