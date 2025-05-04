function insertion(arr) {
    for (let i = 1 ; i < arr.length; i++) {
        const cur = arr[i]

        let j = i - 1;
        console.log('cur: ', cur, ', j: ', arr[j])
        while (j >= 0 && arr[j] > cur) {
            
            arr[j+1] = arr[j];
            j--
            console.log('WHILE - arr: ', arr)
        }

        arr[j+1] = cur;
        console.log('arr: ', arr)
        console.log('===========================')
    }
    
    return arr;
}

// console.log('insertion([3,2,4])', insertion([3,2,4]));
console.log('insertion([12, 11, 13, 5, 6])', insertion([12, 11, 13, 5, 6]));