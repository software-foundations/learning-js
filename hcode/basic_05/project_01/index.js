// array
/*
Accept storage heterogenous items
*/
let cars = ['model 1', 'model 2', 'model 3', new Date(), function (){return console.log('hello');}];

console.log(cars);
console.log(cars[0]);
console.log(cars[3].getMonth());
console.log(cars[4]());