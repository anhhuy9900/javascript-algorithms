/**
 * when we need to use object ?
 * * when we don't need order one of them
 * * when we uses the object , it's fast to access / insertion / Removal
 * * In big O of Object, we have:
 * * - Insertion - 0(1)
 * * - Removal - 0(1)
 * * - Searching - 0(n)
 * * - Access - 0(1)
 */

let object = {
    firstName: 'Nguyen',
    lastName: 'Huy',
    status: true,
    numberOfKeys: [1, 2, 3, 4, 5,]
}

/**
 * Big O of Object Method
 * ! Object.keys - 0(N)
 * ! Object.values - 0(N)
 * ! Object.entries - 0(N)
 * ! hasOwnProperty - 0(1)
 */

console.log(Object.keys(object));
//Output:  ['firstName', 'lastName', 'status', 'numberOfKeys' ]

console.log(Object.values(object));
//Output: [ 'Nguyen', 'Huy', true, [ 1, 2, 3, 4, 5 ] ]

console.log(Object.entries(object));
//Output: 
// [
//     [ 'firstName', 'Nguyen' ],
//     [ 'lastName', 'Huy' ],
//     [ 'status', true ],
//     [ 'numberOfKeys', [ 1, 2, 3, 4, 5 ] ]
// ]

console.log(object.hasOwnProperty('firstName'));
//Output: true

// ! What is the big O for adding a key and value into an object?
// -> O(1)
// ! What is the big O for accessing a key in an object?
// -> O(1)
// ! What is the big O of removing a key in an object
// -> O(1)