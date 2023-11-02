
function bubbleSort1(arr = []) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let temp = arr[i];
            if (arr[i] > arr[j]) {
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }

    return arr;
}


function bubbleSort(arr = []) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            // console.log(arr, arr[j], arr[j+1]);
            // console.log('*******************************')
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }

    return arr;
}

console.log('bubbleSort([5, 3, 10, 2, 8])', bubbleSort([5, 3, 10, 2, 8]));
console.log('bubbleSort([5, 3, 4, 1, 2])', bubbleSort([5, 3, 4, 1, 2]));
console.log('bubbleSort([37, 45, 29, 8])', bubbleSort([37, 45, 29, 8]));

// console.log('************************************************************')

// function bubbleSort2(arr = []) {
//     for (let i = arr.length; i > 0; i--) {
//         for (let j = 0; j < i - 1; j++) {
//             if (arr[j] > arr[j+1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//             }
//         }
//     }

//     return arr;
// }

// console.log('bubbleSort2([5, 2, 10, 1, 8])', bubbleSort2([5, 2, 10, 1, 8]));
// console.log('bubbleSort2([37, 45, 29, 8])', bubbleSort2([37, 45, 29, 8]));
// console.log('************************************************************')

// function bubbleSort3(arr = []) {
//     for (let i = 0; i < arr.length; i++) {
//         let temp = arr[i + 1];
//         if (arr[i] > arr[i + 1]) {
//             arr[i + 1] = arr[i]
//             arr[i] = temp
//         }
//     }

//     return arr;
// }

// console.log('bubbleSort3([5, 2, 10, 1, 8])', bubbleSort3([5, 2, 10, 1, 8]));
// console.log('bubbleSort3([5, 3, 4, 1, 2])', bubbleSort3([5, 3, 4, 1, 2]));