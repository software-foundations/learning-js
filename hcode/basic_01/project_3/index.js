// Comparison operations

/*
let a = 10;
const b = 20;
console.log(a == b);
*/

/*
let a =  10;
const b = "10";
console.log(a == b); // returns True because the == operator cast both operators to string representation
*/

/*
let a =  10;
const b = "10";
console.log(a === b); // returns False, because the === operator compares both the value and the type
*/

/*
let a =  10;
const b = "10";
let c = "10";
console.log(a === b);
console.log(a === c); // returns False, too. It is just to test with the let statement to see an integer and an string beeing different
*/

let a =  10;
const b = "10";
console.log(a != b); // returns False

/*
let a =  10;
const b = "10";
console.log(a !== b); // returns True
*/