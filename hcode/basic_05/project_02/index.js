// array
/*
Accept storage heterogenous items
*/
let cars = ['model 1', 'model 2', 'model 3', new Date(), function (){return console.log('hello');}];

// using anonym functio to iterate over the array
// using foreach

cars.forEach(function(value, index)
	{
		console.log(index, value);
	});