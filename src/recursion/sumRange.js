/**
 * In context, write a function sum range of value from arg value
 * example: value is 3 -> return 3 + (2 + (1)) = 6
 */
function sumRange(num) {
    //if we need to return specific value to avoid error RangeError: Maximum call stack size exceeded
    if (!num) return 0;
    return num + sumRange(num - 1)
}
console.log('sumRange(3): ', sumRange(3));