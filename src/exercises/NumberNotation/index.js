
function convertNumberNotation(val) {

    const fixedNum = (num, originNum = false) => {
        const floor = Math.floor(num * 100) / 100;
        return Number(originNum) < 0 ? floor * -1 : floor
    }

    const notationDef = {
        '': 0,
        'K': 3,
        'M': 6,
        'B': 9,
        'T': 12,
        'aa': 15,
        'ab': 18,
        'ac': 21,
        'ad': 24,
    }

    const nArr = Object.keys(notationDef).map((el) => ({
        notation: el,
        val: notationDef[el] ? 10 ** notationDef[el] : 0
    }))
   
    const nVal = Math.abs(val);

    for (let i = 0; i < nArr.length; i++) {

        if (i+1 >= nArr.length ) break; 

        if (nVal >= nArr[i].val && nVal < nArr[i+1].val) {
            return fixedNum(nArr[i].val ? nVal / nArr[i].val : nVal, val) + nArr[i].notation
        }
    }

    return fixedNum(nVal / 10 ** 300, val)  + 'dr';

}


console.log('convertNumberNotation(0): ', convertNumberNotation(0));
console.log('convertNumberNotation(1): ', convertNumberNotation(1));
console.log('convertNumberNotation(-1): ', convertNumberNotation(-1));
console.log('convertNumberNotation(123): ', convertNumberNotation(123));
console.log('convertNumberNotation(0.25): ', convertNumberNotation(0.25));
console.log('convertNumberNotation(-0.9999): ', convertNumberNotation(-0.9999));
console.log('convertNumberNotation(0.009): ', convertNumberNotation(0.009));
console.log('convertNumberNotation(1000): ', convertNumberNotation(1000));
console.log('convertNumberNotation(1234): ', convertNumberNotation(1234));
console.log('convertNumberNotation(-4002): ', convertNumberNotation(-4002));
console.log('convertNumberNotation(5809): ', convertNumberNotation(5809));
console.log('convertNumberNotation(100000): ', convertNumberNotation(100000));
console.log('convertNumberNotation(123456789): ', convertNumberNotation(123456789));
console.log('convertNumberNotation(1234567890): ', convertNumberNotation(1234567890));
console.log('convertNumberNotation(1234567890000): ', convertNumberNotation(1234567890000));
console.log('convertNumberNotation(999999999999999): ', convertNumberNotation(999999999999999));
console.log('convertNumberNotation(1234567890000000000): ', convertNumberNotation(1234567890000000000));
console.log('convertNumberNotation(-0.0000001): ', convertNumberNotation(-0.0000001));
console.log('convertNumberNotation(10³⁰⁰): ', convertNumberNotation(10 ** 300));