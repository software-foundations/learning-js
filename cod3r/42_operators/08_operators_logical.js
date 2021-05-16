function shopping(job1, job2) {
    const buyIceCream = job1 || job2
    const buyTV50 = job1 && job2
    const buyTV32 = job1 != job2 //XOR
    const beHealth = !buyIceCream // unary operand

    /* acts like 
     * return {
     *  "buyIceCream": buyIceCream, 
     *  "buyTV50": buyTV50, 
     *  "buyTV32": buyTV32, 
     *  "beHealth": beHealth}
    */
    return {buyIceCream, buyTV50, buyTV32, beHealth}

}

console.log(shopping(false, false))
console.log(shopping(false, true))
console.log(shopping(true, false))
console.log(shopping(true, true))
