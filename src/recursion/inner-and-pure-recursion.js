/**
 * Use the inner function to recursion
 */
function collectOddValues(arr = []) {
    let result = [];
    
    const innerFunc = () => {
        if (!arr.length) return;
        
        if (arr[0] % 2 === 0) result.push(arr[0])

        arr = arr.slice(1)

        innerFunc();
    }

    innerFunc();

    return result;
}

console.log('collectOddValues([1,2,3,4,5,6]): ', collectOddValues([1,2,3,4,5,6]));

/**
 * Use the pure recursion
 */
function recursionCollectOddValues(arr = [], values = []) {
    
    if (!arr.length) return values;
        
    if (arr[0] % 2 === 0) values.push(arr[0])

    arr = arr.slice(1)

    return recursionCollectOddValues(arr, values);
}

console.log('recursionCollectOddValues([1,2,3,4,5,6]): ', recursionCollectOddValues([1,2,3,4,5,6]));

/**
 * Use the concat function to get odd values
 */
function recursionCollectOddValuesByConcat(arr = []) {
    
    if (!arr.length) return;
        
    if (arr[0] % 2 === 0) return arr[0]

    return [].concat(recursionCollectOddValues(arr.slice(1)));
}

console.log('recursionCollectOddValuesByConcat([1,2,3,4,5,6]): ', recursionCollectOddValuesByConcat([1,2,3,4,5,6]));