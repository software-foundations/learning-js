/*
* Function
* Anonym Function
* Arrow Function
*/

let result = (function (x1, x2, operator) {	

	// It magically returns x1 operator x2
	return eval(`${x1} ${operator} ${x2}`);
	
})(10, 1, '+');

console.log(result);