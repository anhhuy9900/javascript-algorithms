const s1 = ['Peter', 'Alan', 'Mike', 'Philip', 'Anchor'];
const s2 = [4, 7, 13, 20 , 35];

console.log('s1.sort: ', s1.sort());
// The array can't exactly sort because the sort method just follow sort with Unicode-string
console.log('s2.sort: ', s2.sort());

// DESC
console.log('s2.sort with comparison callback: ', s2.sort((a, b) => a - b));
// ASC
console.log('s2.sort with comparison callback: ', s2.sort((a, b) => a - b));

// Sort DESC
console.log('s1.sort with comparison callback: ', s1.sort((a, b) => b.localeCompare(a)));
console.log('s1.sort with comparison callback: ', s1.sort((a, b) => b.localeCompare(a)));