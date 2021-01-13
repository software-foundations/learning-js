/*
* Function
* Anonym Function
* Arrow Function
*/

function calc(x1, x2, operator) {	

	// It magically returns x1 operator x2
	return eval(`${x1} ${operator} ${x2}`);
	
}		

let result = calc(10, 1, '+');
console.log(result);