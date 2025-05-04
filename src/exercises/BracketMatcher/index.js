function BracketMatcher(str) {
    const splitArr = str.split(')');
    let valid = 0;
    if (splitArr.length) {
        splitArr.forEach(el => {
            if (el &&  el.indexOf('(') === 0 && el.split('(').length === 1) {
                valid++;
            }
        })
    }

    return valid < 2 ? 0 : 1;
}

console.log("(coder)(byte)) -> ", BracketMatcher("(coder)(byte))"));