function firstAction() {
    return 'The first action need to do'
}

function secondFirst() {
    randomNumber();
    return 'The second action need to do'
}


function randomNumber() {
    const random = Math.random();
    return random
}

function runAll() {
    firstAction();
    secondFirst();
}

runAll();