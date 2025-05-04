/**
 * power
Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. 
This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.
 */

function power(base = 0, exponent = 0) {
    if (!exponent) return 1;
    if (base < 0) return NaN;
    if (base > 0 && exponent < 1) return base * exponent;
    return base * (power(base, --exponent));
}

console.log('power(7, 3): ', power(7, 3));
console.log('power(4, 0.5): ', power(4, 0.5));
console.log('power(7, -2): ', power(7, -2));
console.log('power(-7, 0.5): ', power(-7, 0.5));