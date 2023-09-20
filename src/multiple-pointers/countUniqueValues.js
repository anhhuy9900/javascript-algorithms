// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. 
// There can be negative numbers in the array, but it will always be sorted

// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4


/**
 * ! Time Complexity - O(N^2) - Space Complexity - O(1)
 * problem -> for inside for
 */
function countUniqueValues(arr) {
    if (!arr.length) return 0

    let uniqueNumber = [];
    for (let i = 0; i < arr.length; i++) {
        let num = 1;
        for (let j = i + 1; j < arr.length; j++) {
            if (!num) {
                continue
            }
  
            if (arr[i] === arr[j]) {
                num = 0;
            } 
        }

        if (num) {
            uniqueNumber.push(num)
        }
    }

    return uniqueNumber.length;
}

console.log('countUniqueValues([1,1,1,1,1,2]) => ', countUniqueValues([1,1,1,1,1,2]));
console.log('countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) => ', countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));
console.log('countUniqueValues([]) => ', countUniqueValues([]));
console.log('countUniqueValues([-2,-1,-1,0,1]) => ', countUniqueValues([-2,-1,-1,0,1]));


/**
 * Refactor the function by just use only array for loop the array
 * ! Time Complexity - O(N) - Space Complexity - O(1)
 */
function countUniqueValuesRefactor(arr) {
    if (!arr.length) return 0

    let uniqueNumber = [];
    for (let i = 0; i < arr.length; i++) {
        let num = 0;

        if (arr[i] !== arr[i + 1]) {
            num++;
        }

        if (num) {
            uniqueNumber.push(num)
        }
    }

    return uniqueNumber.length;
}
console.log('==================================================================')
console.log('countUniqueValuesRefactor([1,1,1,1,1,2]) => ', countUniqueValuesRefactor([1,1,1,1,1,2]));
console.log('countUniqueValuesRefactor([1,2,3,4,4,4,7,7,12,12,13]) => ', countUniqueValuesRefactor([1,2,3,4,4,4,7,7,12,12,13]));
console.log('countUniqueValuesRefactor([]) => ', countUniqueValuesRefactor([]));
console.log('countUniqueValuesRefactor([-2,-1,-1,0,1]) => ', countUniqueValuesRefactor([-2,-1,-1,0,1]));
console.log('countUniqueValuesRefactor([1,2,2,5,7,7,99]) => ', countUniqueValuesRefactor([1,2,2,5,7,7,99]));


function countUniqueValuesRefactor2(arr){
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}
console.log('==================================================================')
console.log('countUniqueValuesRefactor2([1,2,2,5,7,7,99]) => ', countUniqueValuesRefactor2([1,2,2,5,7,7,99]));
console.log('countUniqueValuesRefactor2([-2,-1,-1,0,1]) => ', countUniqueValuesRefactor2([-2,-1,-1,0,1]));