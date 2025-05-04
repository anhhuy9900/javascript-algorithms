// It's a combination of two things - merging and sorting!
// Exploits the fact that arrays of 0 or 1 element are always sorted
// Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array
const mergeArray = require('./merge-array');

// console.log('mergeArray([ 1, 5 ], [ 3, 4 ]): ', mergeArray([ 1, 5 ], [ 3, 4 ]));

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    left = mergeSort(left);
    right = mergeSort(right);

    // console.log('left: ', left);
    // console.log('right: ', right);
    // console.log('=========================')

    return mergeArray(left, right);
}

console.log('mergeSort([2,1,4,3]): ', mergeSort([2,1,4,3]))
console.log('mergeSort([8,3,5,4,7,6,1,2]): ', mergeSort([8,3,5,4,7,6,1,2]))