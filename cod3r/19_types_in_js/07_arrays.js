const values = [7.7, 8.9, 6.3, 9.2]
console.log(values[0], values[3])
console.log(values[4]) // -> undefined instead of raise an error

values[4] = 10
console.log(values)

values[6] = 20 
console.log(values) // [ 7.7, 8.9, 6.3, 9.2, 10, <1 empty item>, 20 ]

console.log(values)

values.push(30) // Adding more elements from end of the array
console.log(values)

values.pop() // remove last element
console.log(values)

delete values[0] // delete some item
console.log(values) // [ <1 empty item>, 8.9, 6.3, 9.2, 10, <1 empty item>, 20 ]

console.log(typeof values) // object

