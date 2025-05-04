// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.
function flatten(arr = []) {
    if (!arr.length) return arr;

    let nArr = [arr[0]];

    if (Array.isArray(arr[0])) {
        nArr = flatten(arr[0]);
    }

    return [...nArr].concat(flatten(arr.slice(1)));
}
console.log('flatten([1, 2, 3, [4, 5] ]) ====>', flatten([1, 2, 3, [4, 5] ]))
console.log('flatten([[1],[2],[3]]) ====>', flatten([[1],[2],[3]]))
console.log('flatten([1, [2, [3, 4]]) ====>', flatten([1, [2, [3, 4]]]))
console.log('flatten([1, [2, [3, 4], [[5]]]]) ====>', flatten([1, [2, [3, 4], [[5]]]]))
console.log('flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) ====>', flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]))
console.log('flatten([[{ "a": 1 }],[{ "b": 2 }, { "c": 3 }]]) ====>', flatten([[{ "a": 1 }],[{ "b": 2 }, { "c": 3 }]]))
