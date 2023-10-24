// Write a recursive function called reverse which accepts a string and returns a new string in reverse.
function reverse(str = '') {
    if (!str.length || typeof str !== 'string') return '';
    return `${str[str.length - 1]}${reverse(str.slice(0, str.length - 1))}` 
}

console.log("reverse('Test'): ", reverse('Test'));
console.log("reverse('The quick brown fox jumps over the lazy dog.'): ", reverse('The quick brown fox jumps over the lazy dog.'));
