let value // declared, but not initializated -> undefined

console.log(value) // undefined
// console.log(value2) // not declared -> ReferenceError: value2 is not defined

value = null // null type -> does not point to any memory address
console.log(value)
// console.log(value.toString())//TypeError:Cannot read property 'toString' of null

const product = {}
console.log(product.price) // undefined (because price is not declared)
// console.log(product.price.a) // TypeError: Cannot read property 'a' of undefined
console.log(product)

product.price = 3.50
console.log(product)

product.price = undefined // DON'T DO THAT IN REAL LIFE
console.log(!!product.price) // false
console.log(product) // { price: undefined }

delete product.price // REMOVE THE ATTR OF AN OBJECT
console.log(product) // {}

product.price = null // without price
console.log(product) // { price: null } -> this product.price not points to any
console.log(!!product.price) // false
