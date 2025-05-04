// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.
// This algorithm should be more efficient than linearSearch - 
// you can read how to implement it here - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search 
// and here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/

function binarySearch(arr, searchVal) {
    // find a pointer in middle of the array

    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const middleIdx = Math.floor((left + right) / 2);

        if (searchVal === arr[middleIdx]) return middleIdx;

        if (searchVal < arr[middleIdx]) {
            right = middleIdx - 1;
        } else {
            left = middleIdx + 1;
        }

        if (right === middleIdx) {
            return -1
        }
    }

    return -1;
}

console.log('binarySearch([1,2,3,4,5],2) ==> ', binarySearch([1,2,3,4,5],2)) // 1
console.log('binarySearch([1,2,3,4,5],3) ==> ', binarySearch([1,2,3,4,5],3)) // 2
console.log('binarySearch([1,2,3,4,5],5) ==> ', binarySearch([1,2,3,4,5],5)) // 4
console.log('binarySearch([1,2,3,4,5],6) ==> ', binarySearch([1,2,3,4,5],6)) // - 1
const r2 = binarySearch([ 5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10); // 2
console.log('binarySearch - r2 ==> ', r2)
const r3 = binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
  ], 95); // 16
console.log('binarySearch - r3 ==> ', r3)

const r4 = binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
  ], 100); // -1
console.log('binarySearch - r4 ==> ', r4)