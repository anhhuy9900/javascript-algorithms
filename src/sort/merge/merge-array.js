// In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays
// Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the two input arrays
// This function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it.

function mergeArray(arr1, arr2) {

    if (!arr1.length && !arr2.length) return [];

    let i = 0;
    let j = 0;
    const result = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
        // console.log('result: ', result);
    }

    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}

// console.log('mergeArray([1, 10, 50], [2, 13, 60, 100]): ', mergeArray([1, 10, 50], [2, 13, 60, 100]));
// console.log('mergeArray([1, 3], []): ', mergeArray([1, 3], []));
// console.log('mergeArray([], [34, 99]): ', mergeArray([], [34, 99]));
// console.log('mergeArray([1, 88, 15], [34, 99]): ', mergeArray([1, 88, 15], [34, 99]));

module.exports = mergeArray;