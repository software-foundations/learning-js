{
	{
		{
			{ 
				var myVar = "Value"
				console.log(myVar)
			}
		}
	}
}

// variables declared with var are visible in global scope

console.log(myVar)

function myTest() {
	var local = 123 // it's local 'cause it is declared inside a function
}

myTest()
// console.log(local) // ReferenceError: local is not defined

// at the browser
var a = 123
// console.log(window.a) // window is a global object which access variables defined with var outside functions
