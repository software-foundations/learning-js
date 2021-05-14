let isActive = false
console.log(isActive)

isActive = true
console.log(isActive)

// Using not operator (!) twice
isActive = 1
console.log(!!isActive)

console.log('The True Values')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'text')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isActive = true))

console.log('The False Values')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isActive = false))

console.log('To finish')
console.log(!!('' || null || 0 || ' ')) // ' ' is true in the or (||) context

// OR used to give a default value to a variable
let name = ''
console.log(name || 'unknown')

name = 'Bruno'
console.log(name || 'unknown')