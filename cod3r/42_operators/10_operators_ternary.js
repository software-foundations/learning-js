const result = grade => grade >= 7 ? 'Approved': 'Disapproved'

console.log(result(6))
console.log(result(7))

const status = result(9)
console.log(status)
