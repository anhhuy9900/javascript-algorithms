// Write a function, which accepts two arrays. 
// The function should return true if every value in the array has it's corresponding value squared in the second array. 
// The frequency of values must be the same.

// console.log( 1 ** 2);

// [1, 2, 3], [4, 1, 9]
function findSameValue(arr1 = [], arr2 = []) {
    if (arr1.length !== arr2.length) {
        return false
    }
    for (let i = 0; i <= arr1.length; i++) {
        for (let j = 0; j <= arr2.length; j++) {
            if (arr1[i] ** 2 === arr2[j]) {
                arr2.splice(j, 1);
            } 
        }
    }
    return !arr2.length;
}

console.log('findSameValue => case 1: ', findSameValue([1, 2, 3], [4, 1, 9]));
console.log('findSameValue => case 2: ', findSameValue([1, 2, 3], [1, 9]));
console.log('findSameValue=> case 3: ', findSameValue([1, 2, 1], [4, 4, 1]));

/**
 * Find same values by other way
 * @param {*} arr1 
 * @param {*} arr2 
 * @returns 
 */
function findSameValue2(arr1 = [], arr2 = []) {
    if (arr1.length !== arr2.length) {
        return false
    }
    for (let i = 0; i <= arr1.length; i++) {
        const sameValue = arr2.indexOf(arr1[i] ** 2);
        if (!sameValue) {
            return false;
        } 

        arr2.splice(i, 1);
    }

    return true;
}

console.log('findSameValue2 => case 1: ', findSameValue2([1, 2, 3], [4, 1, 9]));
console.log('findSameValue2 => case 2: ', findSameValue2([1, 2, 3], [1, 9]));
console.log('findSameValue2 => case 3: ', findSameValue2([1, 2, 1], [4, 4, 1]));

/**
 * Refactor
 * ! high recommend
 */


console.log("============ REFACTOR ====================")
function findSameValueRefactor(arr1 = [], arr2 = []) {
    if (arr1.length !== arr2.length) {
        return false
    }

    let objFrequency1 = {};
    for (let i = 0; i < arr1.length; i++) {
        objFrequency1[arr1[i]] = ( objFrequency1[arr1[i]] || 0) + 1;
    }

    let objFrequency2 = {};
    for (let i = 0; i < arr2.length; i++) {
        objFrequency2[arr2[i]] = (objFrequency2[arr2[i]] || 0) + 1;
    }

    for (let key in objFrequency1) {
        
        if (!objFrequency2[key ** 2]) {
            return false;
        }

        if (objFrequency2[key ** 2] !== objFrequency1[key]) {
            return false;
        }

    }

    return true;
}

console.log('findSameValueRefactor => case 1: ', findSameValueRefactor([1, 2, 3], [4, 1, 9]));
console.log('findSameValueRefactor => case 2: ', findSameValueRefactor([1, 2, 3], [1, 9]));
console.log('findSameValueRefactor => case 3: ', findSameValueRefactor([1, 2, 1], [4, 4, 1]));


