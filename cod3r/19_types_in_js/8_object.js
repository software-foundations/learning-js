/*
An object in js is not the same as a json

json is a textual format of an object. It is an serialized object


*/

const prod1 = {} // an empty object to be defined dinamically
prod1.name = 'Ultra Mega Cellphone'
prod1.price = 4998.90
prod1['good_discount'] = 0.40
prod1['good discount'] = 0.40 // avoid spaces in attributes, even if it works

console.log(prod1)

const prod2 = {
	name: 'Blue T-Shirt',
	price: 79.90,
	obj: {
		blabla: 1,
		obj: {
			blabla: 2
		}
	}	
}

console.log(prod2)

// A JSON
// https://jsonformatter.curiousconcept.com/#

'{"name": "Blue T-Shirt", "price": 79.90}'
