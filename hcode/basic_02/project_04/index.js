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