// unix time stamp: second since 1970, jan, 01
// this is more well formated
let date = new Date();

console.log(date); // Thu Jan 14 2021 00:13:46 GMT-0300 (Brasilia Standard Time)
console.log(date.getDate()); // Day
console.log(date.getFullYear()); // Year
console.log(date.getMonth()); // Month
console.log(date.toLocaleDateString("pt-BR")); // Formatted according to the local

