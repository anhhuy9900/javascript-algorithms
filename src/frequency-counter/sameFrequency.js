// * Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
// ! Your solution MUST have the following complexities:
// ! Time: O(N)

// Sample Input:
// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function sameFrequency(val1, val2) {
    const str1 = val1.toString();
    const str2 = val2.toString();

    if (str1.length !== str2.length)  return false
    
    const obj2 = {};
    for (let i = 0; i < str2.length; i++) {
        obj2[str2[i]] = str2[i];
    }

    for (let i = 0; i < str1.length; i++) {
        if (!obj2[str1[i]]) {
            return false;
        }
    }

    return true;
}

console.log('sameFrequency(182,281): ', sameFrequency(182,281));
console.log('sameFrequency(34,14): ', sameFrequency(34,14));
console.log('sameFrequency(3589578, 5879385): ', sameFrequency(3589578, 5879385));
console.log('sameFrequency(22,222): ', sameFrequency(22,222));