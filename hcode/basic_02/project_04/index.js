/*
* Arrow Function

It can access/share things outside its scope
*/

let calc = (x1, x2, operator) => {	

	// It magically returns x1 operator x2
	return eval(`${x1} ${operator} ${x2}`);
	
}

let result = calc(10, 1, '+');
console.log(result);

/*

* callback
When there is a function which is returned
at the end of an action

* DOM: Document object model
Javascrit interacts with DOM

* Events
React with the user events with JavsScript

*/