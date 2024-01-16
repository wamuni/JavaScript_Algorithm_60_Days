/**
 *
 * @param {string} s
 */
const replaceNumber = (s) => {
    const sarr = s.split('');
    for (let i = 0; i < sarr.length; i++) {
        if (sarr[i] >= '0' && sarr[i] <= '9') {
            sarr[i] = 0;
        }
    }
    return sarr.join('').split(0).join('number');
};

console.log(replaceNumber('a1b2c3'));
