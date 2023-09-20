/**
 * ! ARRAYS
 * ! when we need to use the arrays ?
 * * when we need order something on array
 * * when we access / insertion / removal ( sorting element in list)
 */
let array = [1, 2, [], {}, 'text', true, [1, 2, 3, 4]];
let action = ['insert', 'update', 'remove'];

/**
 * when we have an array is action
 */
// action is array
// Output:  ['insert', 'update', 'remove']
// 'insert' 'update'  'remove'
//    0        1         2
// When we need to insert, update, remove any element in array it, will affected to performance if the array have thousand, million elements
// It's mean the array will restructure, re-index element when we make insert, update, remove ( element )

// Update
// 'insert' 'remove' 'update' 
//   1         2         3

// Insert
// 'insert' 'update'  'remove' 'new'
//    0        1         2     3

// Removal
// 'insert' 'update' 'new'
//    0        1       3


/**
 * ! Array Methods in Big O
 * 
 * push -> 0(1)
 * pop -> 0(1)
 * shift -> 0(n)
 * unshift -> 0(n)
 * concat -> 0(n)
 * slice -> 0(n)
 * splice -> 0(n)
 * sort -> 0 (N * log N)
 * forEach / map / filter / reduce / etc... -> 0(n)
 */