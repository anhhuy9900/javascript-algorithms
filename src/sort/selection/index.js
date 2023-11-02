function selectionSort(arr = []) {
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


console.log('selectionSort([5, 3, 10, 2, 8])', selectionSort([5, 3, 10, 2, 8]));
console.log('selectionSort([5, 3, 4, 1, 2])', selectionSort([5, 3, 4, 1, 2]));
console.log('selectionSort([37, 45, 29, 8])', selectionSort([37, 45, 29, 8]));


// function sselectionSort(arr){
//     for(var i = 0; i < arr.length; i++){
//         var lowest = i;
//         for(var j = i+1; j < arr.length; j++){
//             if(arr[j] < arr[lowest]){
//                 lowest = j;
//             }
//         }ß
//         if(i !== lowest){
//             var temp = arr[i];
//             arr[i] = arr[lowest];
//             arr[lowest] = temp;
//         }
//     }
//     return arr;
// }