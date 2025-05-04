/**
 * * Given two strings, write a function to determine if the second string is an anagram of the first. 
 * * An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman
 */


function validAnagram(str1, str2) {
    if (!str1.length && !str2.length) {
        return true
    }

    if (str1.length !== str2.length) {
        return false
    }

    // if (str1 !== str2) {
    //     return false
    // }

    let objStr1 = {};
    for (const val of str1) {
        objStr1[val] = objStr1[val] ? objStr1[val] + 1 : 1;
    }

    let objStr2 = {};
    for (const val of str2) {
        objStr2[val] = objStr2[val] ? objStr2[val] + 1 : 1;
    }

    // console.log('objStr1: ', objStr1);
    // console.log('objStr2: ', objStr2);

    for (const key in objStr1) {
        // console.log('objStr2[key]: ', objStr2[key]);
        if (!(key in objStr2) || objStr2[key] !== objStr1[key] || !objStr2[key]) {
            return false;
        }

        //objStr2[key] -= 1;
    }

    return true;
}


console.log("validAnagram('', '') => ", validAnagram('', '')) // true
console.log("validAnagram('aaz', 'zza') => ", validAnagram('aaz', 'zza')) // false
console.log("validAnagram('anagram', 'nagaram') => ", validAnagram('anagram', 'nagaram')); // true
console.log("validAnagram('rat', 'car') => ", validAnagram("rat","car")); // false
console.log("validAnagram('awesome', 'awesom') => ", validAnagram('awesome', 'awesom')) // false
console.log("validAnagram('qwerty', 'qeywrt') => ", validAnagram('qwerty', 'qeywrt')) // true
console.log("validAnagram('qwerty', 'qwerty') => ", validAnagram('qwerty', 'qwerty')) // true
console.log("validAnagram('texttwisttime', 'timetwisttext') => ", validAnagram('texttwisttime', 'timetwisttext')) // true


function validAnagramRefactor(first, second) {
    if (first.length !== second.length) {
      return false;
    }
  
    const lookup = {};
  
    for (let i = 0; i < first.length; i++) {
      let letter = first[i];
      // if letter exists, increment, otherwise set to 1
      lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log('lookup: ', lookup)
  
    for (let i = 0; i < second.length; i++) {
      let letter = second[i];
      // can't find letter or letter is zero then it's not an anagram
      if (!lookup[letter]) {
        return false;
      } else {
        lookup[letter] -= 1;
      }
    }
  
    return true;
  }

//   console.log("validAnagramRefactor('aaz', 'zza') => ", validAnagramRefactor('aaz', 'zza')) // false
console.log("validAnagramRefactor('qwerty', 'qwerty') => ", validAnagramRefactor('qwerty', 'qwerty')) // true
//   // {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
//   console.log("validAnagramRefactor('text', 'ttex') => ", validAnagramRefactor('text', 'ttex')) // false