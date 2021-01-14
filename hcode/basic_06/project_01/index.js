// POO
let cellphone = function(){

	this.collor = 'silver';

	this.call = function()
	{
		console.log('one call');
		// if any return is defined
		// the funcion returns 'undefined'

		return 'calling returned';
	}
}

obj = new cellphone();
console.log(obj);
console.log(obj.collor);
console.log(obj.call());