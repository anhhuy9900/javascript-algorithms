/**
 * * Write a function called sumZero which accepts a sorted array of integers. 
 * * The function should find the first pair where the sum is 0. 
 * * Return an array that includes both values that sum to zero or undefined if a pair does not exist
 */


// sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3,3] 
// sumZero([-2,0,1,3]) // undefined
// sumZero([1,2,3]) // undefined

/**
 * ! Time Complexity - O(N^2) - Space Complexity - O(1)
 * problem -> for inside for
 */
function sumZero(arr= []) {
    for (let i = 0; i <= arr.length; i++) {
        for (let j = i + 1; j <= arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

console.log('sumZero([-3, -2, -1, 0, 1, 2, 3]) => ', sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log('sumZero([-2,0,1,3]) => ', sumZero([-2,0,1,3]));
console.log('sumZero([1,2,3]) => ', sumZero([1,2,3]));

/**
 * Refactor the function by just use only array for loop the array
 * ! Time Complexity - O(N) - Space Complexity - O(1)
 */
function sumZeroRefactor(arr = []) {
    let j = arr.length;
    for (let i = 0; i <= arr.length; i++) {
        j--;
        if (arr[i] + arr[j] === 0) {
            return [arr[i],  arr[j]];
        }
    }
}

console.log('sumZeroRefactor([-3, -2, -1, 0, 1, 2, 3]) => ', sumZeroRefactor([-3, -2, -1, 0, 1, 2, 3]));
console.log('sumZeroRefactor([-2,0,1,3]) => ', sumZeroRefactor([-2,0,1,3]));
console.log('sumZeroRefactor([1,2,3]) => ', sumZeroRefactor([1,2,3]));