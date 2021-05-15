const greetings = 'Oops' // lexical context 01 -> global

function exec() {
	const greetings = 'Hellooo' // lexical context 02 -> function
	return greetings
}

// const greetings = 'Hi' // SyntaxError: Identifier 'greetings' has already been declared

// Objects are nested key:value groups

const client = {
	name: 'Pedro',
	age: 32,
	weight: 90,
	address: {
		street: 'Cool Street',
		number: 123
	}
}

console.log(greetings)
console.log(exec())
console.log(client)
