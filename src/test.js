// [1, 3, 5] [5, 6, 7]

function findSameValue(arr1 = [], arr2 = []) {

    if (!arr1.length && !arr2.length) return [];

    const arr = [];

    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            arr.push(arr1[i]);
        }
    }
    
    return arr;
}

// console.log('findSameValue([] [5, 6, 7] => ', findSameValue([], [5, 6, 7]) );
// console.log('findSameValue([1, 3, 5], [5, 6, 7] =>', findSameValue([1, 3, 5], [5, 6, 7]));
// console.log('findSameValue([1, 3, 4], [5, 6, 7] =>', findSameValue([1, 3, 4], [5, 6, 7]));


function findValueSquareExist(arr1 = [], arr2 = []) {
    if (arr1.length !== arr2.length) {
        return false
    }

    const obj2 = {};
    for (let i = 0; i < arr2.length; i++) {
        obj2[arr2[i]] = arr2[i] || 1;
    }

    const arr = [];
    for (let i = 0; i < arr1.length; i++) {
        if (obj2[arr1[i] ** 2]) {
            arr.push(arr1[i])
        }
    }

    return arr.length ? true : false;
}

// console.log('findValueSquareExist => case 1: ', findValueSquareExist([1, 2, 3], [4, 1, 9]));
// console.log('findValueSquareExist => case 1: ', findValueSquareExist([8, 2, 5], [4, 1, 9]));
// console.log('findValueSquareExist => case 2: ', findValueSquareExist([1, 2, 3], [1, 9]));
// console.log('findValueSquareExist=> case 3: ', findValueSquareExist([1, 2, 1], [3, 5, 3]));
// console.log('findValueSquareExist=> case 3: ', findValueSquareExist([], [3, 5, 3]));

function sumRangeNumber(val) {
    if (val < 1) return 1

    return val * sumRangeNumber(--val)
}

// console.log('sumRangeNumber(3): ', sumRangeNumber(3))
// console.log('sumRangeNumber(10): ', sumRangeNumber(10))
// console.log('sumRangeNumber(100): ', sumRangeNumber(100))

function power(base, powerNum) {
    if (powerNum < 1) return 1;

    return base * power(base, --powerNum);
}
console.log('power(2, 3): ', power(2, 3))