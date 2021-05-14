const school = "Cod3r"

console.log(school.charAt(0)) // -> C
console.log(school.charAt(1)) // -> o
console.log(school.charAt(2)) // -> d
console.log(school.charAt(3)) // -> 3
console.log(school.charAt(4)) // -> r
console.log(school.charAt(5), typeof school.charAt(5)) // -> Empty string, but  not raises error
console.log(school.charCodeAt(3)) // -> ASCII (unicode) value from 3
console.log(school.indexOf('3')) // -> index of digit 3 inside school string

console.log(school.substring(1))
console.log(school.substring(0, 3))

// Concatenation
console.log('School '.concat(school))
console.log("School ".concat(school).concat("!"))
console.log("School " + school + "!")

// Basic Regex
console.log(school.replace(/\d/, 'e'))
console.log(school.replace(/\w/, 'e'))
console.log(school.replace(/\w/g, 'e')) // g is a flag which means global

// Casting string into array
console.log('Ana,Maria,Pedro'.split(','))
console.log('Ana,Maria,Pedro'.split(/,/))
