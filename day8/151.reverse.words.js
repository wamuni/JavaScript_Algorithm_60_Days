/**
 *
 * @param {string} s
 */
const reverseWord = (s) => {
    return s.trim().split(/\s+/).reverse().join(' ');
};

console.log(reverseWord('This  is the blue sky'));
