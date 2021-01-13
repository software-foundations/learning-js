/*
* Function
* Anonym Function
* Arrow Function
*/

function calc(x1, x2, operator) {
	let result;	

	switch (operator) {
		case '+':
			result = x1 + x2;
			break;

		case '-':
			result = x1 - x2;
			break;

		case '*':
			result = x1 * x2;
			break;

		case '/':
			result = x1 / x2;
			break;

		default:
			alert('invalid operator');
			break;
	}

	message = `${x1} ${operator} ${x2} = ${result}`;
	console.log(message);

	return result;
}

result = calc(10, 1, '+');
console.log(result);