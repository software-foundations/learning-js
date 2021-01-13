let number = 5;

for (var i = 0; i <= 10; i++) {
	
	// template string: insert js command into a string
	console.log(
		`${i} X ${number} = ${i*number}`
	);

	// The equivalent
	console.log(i + " X " + number + " = " + (i*number));

}

// continue -> to continue te execution
// for each -> iterate over elements in a sequence
// for in -> iterate over inside attributes of elements
// while -> execute while some condition is True
// do/while -> execute one time after evaluating the while condition