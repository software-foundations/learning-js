let num1 = 1
let num2 = 2

num1++ // ++ num1 -> work the same way
console.log(num1)
num1-- // -- num1 -> work the same way, but this last one have major precedency
console.log(num1)

console.log(num1, num2)
console.log(num1++ === --num2) // num1++ occurs after comparison, --num after
console.log(num1, num2)
