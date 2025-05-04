function countDown(num = 0) {
    if (!num) return 'None value';

    num--;
    console.log('countDown - num: ', num);

    return countDown(num);
}

countDown(5);