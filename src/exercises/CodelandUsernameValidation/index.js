function codelandUsernameValidation(str) {
    if ( str.length < 4 || str.length > 25
        || typeof str[1] !== 'string'
        || str[str.length - 1] === '_'
        || str.match(/\W/)
    ) return false
    return true;
}
console.log('test', ': ', codelandUsernameValidation('test'))
console.log('aa_', ': ', codelandUsernameValidation('aa_'))
console.log('aabbbb_', ': ', codelandUsernameValidation('aabbbb_'))
console.log('test#2', ': ', codelandUsernameValidation('test#2'))
console.log('u__hello_world123', ': ', codelandUsernameValidation('u__hello_world123'))

console.log('==========================================')

// options
function CodelandUsernameValidation2(str) {
    const regex = /^[a-zA-Z][a-zA-Z0-9_]*[^_]$/g
    return str.length >= 4 && str.length <= 25 && regex.test(str)
  }
     
// keep this function call here 
console.log('test', ': ', CodelandUsernameValidation2('test'))
console.log('aa_', ': ', CodelandUsernameValidation2('aa_'))
console.log('aabbbb_', ': ', CodelandUsernameValidation2('aabbbb_'))
console.log('test#2', ': ', CodelandUsernameValidation2('test#2'))
console.log('u__hello_world123', ': ', CodelandUsernameValidation2('u__hello_world123'))
