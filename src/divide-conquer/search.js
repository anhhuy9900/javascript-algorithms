// * Given a sorted array of integers, write a function that accepts a value and returns the index where the value passed to the function is located. 
// * If the value is not found, return -1

// ! Example output:

// console.log('function([1,2,3,4,5,6],4) => ', function([1,2,3,4,5,6],4)) // 3
// console.log('function([1,2,3,4,5,6],6) => ', function([1,2,3,4,5,6],6)) // 5
// console.log('function([1,2,3,4,5,6],11) => ', function([1,2,3,4,5,6],11)) // -1

/**
 * Linear Search
*  Time complexity 0(N)
 * @param {*} arr sorted
 * @param {*} value is integer
 * @returns index | -1
 */
function searchIndex(arr, value) {
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] === value) return i;
    }

    return -1;
}
console.log('searchIndex([1,2,3,4,5,6],4) => ', searchIndex([1,2,3,4,5,6],4)) // 3
console.log('searchIndex([1,2,3,4,5,6],6) => ', searchIndex([1,2,3,4,5,6],6)) // 5
console.log('searchIndex([1,2,3,4,5,6],11) => ', searchIndex([1,2,3,4,5,6],11)) // -1


/**
 * This way to better than the above function
 * Binary Search 
 * Time complexity - Log(N)
 * @param {*} arr sorted
 * @param {*} value is integer
 * @returns index | -1
 */
function searchIndexRefactor(arr, value) {

    if (!arr.length) return -1;

    const midNum = Math.max(arr.length / 2);
    let j = midNum - 1;
    for (let i = 0; i <= midNum; i++) {
        value > midNum ? j++ : j--
        if (arr[j] === value) return j;
    }

    return -1;
}

console.log('searchIndexRefactor([1,2,3,4,5,6],4) => ', searchIndexRefactor([1,2,3,4,5,6],4)) // 3
console.log('searchIndexRefactor([1,2,3,4,5,6],6) => ', searchIndexRefactor([1,2,3,4,5,6],6)) // 5
console.log('searchIndexRefactor([1,2,3,4,5,6],11) => ', searchIndexRefactor([1,2,3,4,5,6],11)) // -1
console.log('searchIndexRefactor([1,2,3,4,5,6],1) => ', searchIndexRefactor([1,2,3,4,5,6],1)) // 0

/**
 * there are different way to search
 */
function searchIndexRefactor2(array, val) {
    let min = 0;
    let max = array.length - 1;
 
    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        let currentElement = array[middle];
 
        if (array[middle] < val) {
            min = middle + 1;
        }
        else if (array[middle] > val) {
            max = middle - 1;
        }
        else {
            return middle;
        }
    }
 
    return -1;
}

console.log('searchIndexRefactor2([1,2,3,4,5,6],4) => ', searchIndexRefactor2([1,2,3,4,5,6],4)) // 3
console.log('searchIndexRefactor2([1,2,3,4,5,6],6) => ', searchIndexRefactor2([1,2,3,4,5,6],6)) // 5
console.log('searchIndexRefactor2([1,2,3,4,5,6],11) => ', searchIndexRefactor2([1,2,3,4,5,6],11)) // -1
console.log('searchIndexRefactor2([1,2,3,4,5,6],1) => ', searchIndexRefactor2([1,2,3,4,5,6],1)) // 0