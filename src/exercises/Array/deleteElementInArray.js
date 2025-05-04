const arr = [1, 2, 5, 7, 11, 12, 17]
function findAndDeleteElement(array = [], needDelete = 0) {
    for (let i = 0; i <= array.length; i++) {
        if (needDelete === array[i]) {
            delete array[i];
            break;
        }
    }

    return array;
}

console.log("\n------------------------------------");
// LOG:  findAndDeleteElement:  [ 1, 2, 5, <1 empty item>, 11, 12, 17 ]
console.log('LOG: ', 'findAndDeleteElement: ', findAndDeleteElement([...arr], 7));
console.log("------------------------------------");

function findAndDeleteElement2(array = [], needDelete = 0) {
    return array.filter(el => el !== needDelete);
}

console.log("\n------------------------------------");
// LOG:  findAndDeleteElement2:  [ 1, 2, 5, 11, 12, 17 ]
console.log('LOG: ', 'findAndDeleteElement2: ', findAndDeleteElement2([...arr], 7));
console.log("------------------------------------");

function findAndDeleteElement3(array = [], needDelete = 0) {
    const nArray = [];
    for (let i = 0; i < array.length; i++) {
        if (needDelete !== array[i]) {
            nArray.push(array[i])
        }
    }

    return nArray;
}

console.log("\n------------------------------------");
// LOG:  findAndDeleteElement:  [ 1, 2, 5, <1 empty item>, 11, 12, 17 ]
console.log('LOG: ', 'findAndDeleteElement3: ', findAndDeleteElement3([...arr], 7));
console.log("------------------------------------");