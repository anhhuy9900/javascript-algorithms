function AddNewElementAtPosition(array = [], position = 0, newValue = 0) {
    const nArray = [];
    array.forEach((el, idz) => {
        if (position === idz) {
            nArray.push(newValue);
        }
        nArray.push(el);
    })
    return nArray;
}

const arr = [1, 2, 5, 7, 11, 12, 17]

console.log("\n------------------------------------");
// LOG:  findAndDeleteElement2:  [ 1, 2, 5, 11, 12, 17 ]
console.log('LOG: ', 'AddNewElementAtPosition: ', AddNewElementAtPosition(arr, 2, 10));
console.log("------------------------------------");

function AddNewElementAtPosition2(array = [], position = 0, newValue = 0) {
    const nArray = [];

    for (let i = 0; i < position; i++) {
        nArray.push(array[i])
    }
    nArray[position] =  newValue
    for (let i = position; i < array.length; i++) {
        nArray.push(array[i])
    }
    return nArray;
}
console.log("\n------------------------------------");
// LOG:  AddNewElementAtPosition2:  [
//     1,  2, 10,  5,
//     7, 11, 12, 17
// ]
console.log('LOG: ', 'AddNewElementAtPosition2: ', AddNewElementAtPosition2(arr, 2, 10));
console.log("------------------------------------");