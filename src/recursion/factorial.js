/**
 * For example get the factorial of specific value without use the recursion
 * 4 ^ 4 = 26 -> 1 * 2 * 3 * 4
 */
function factorial(num) {
    let value = 1;
    for (let i = 1; i <= num; i++) {
        value = value * i
    }
    return value;
}

console.log('factorial(4): ', factorial(4));



function factorialRecursion(val) {
    if (val < 1 ) return 1;
    return val * factorial(--val)
}
console.log('factorialRecursion(4): ', factorialRecursion(4));