console.log(typeof Object) // function
console.log(typeof new Object) // object (a function instantiated) -> like call constructor method
console.log(typeof new Object())

const Client = function () {}
console.log(typeof Client)
console.log(typeof new Client)
console.log(typeof new Client())

class Product {} // ES 2015 (ES6)
console.log(typeof Product)
console.log(typeof new Product)
console.log(typeof new Product())