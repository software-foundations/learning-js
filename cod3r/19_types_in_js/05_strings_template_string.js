const name = 'Rebecca'
const concatenation = 'Hello ' + name + '!'

const template = `
    Hello 
    ${name}!`

console.log(concatenation, template)

// Expressions in template string
console.log(`1 + 1 = ${1 + 1}`)

// Calling functions inside template string
const up = text => text.toUpperCase()
console.log(`Hey... ${up('care')}!`)
