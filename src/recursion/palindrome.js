// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). 
// Otherwise it returns false.
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str) {
    if (!str.length || str.length === 1) return true;

    if (str[0] !== str[str.length - 1]) return false;

    return isPalindrome(str.slice(1, str.length - 1));
}

console.log("isPalindrome('awesome'): ", isPalindrome('awesome'));
console.log("isPalindrome('foobar'): ", isPalindrome('foobar'));
console.log("isPalindrome('tacocat'): ", isPalindrome('tacocat'));
console.log("isPalindrome('amanaplanacanalpanama'): ", isPalindrome('amanaplanacanalpanama'));
console.log("isPalindrome('amanaplanacanalpandemonium'): ", isPalindrome('amanaplanacanalpandemonium'));