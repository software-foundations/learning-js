// New feature of ES2105
// {} -> destructuring operator

const person = {
	name: 'Ana',
	age: 5,
	address: {
		street: 'Street ABC',
		number: 1000
	}
}

const { name, age } = person
console.log(name, age) // Ana 5

const {name: n, age: i} = person
console.log(n, i) // Ana 5

const {lastname, goodHumored = true} = person
console.log(lastname, goodHumored) // undefined true

const { address: { street, number, cep} } = person
console.log(street, number, cep) // Street ABC 1000 undefined

const { account: { agency, num } } = person // TypeError: Cannot read property 'agency' of undefined
console.log(agency, num)
