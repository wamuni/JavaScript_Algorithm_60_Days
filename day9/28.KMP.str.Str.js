/**
 *
 * @param {string} haystack
 * @param {string} needle
 * @returns {number}
 * using JavaScript API
 */
const strStr = (haystack, needle) => {
    return haystack.indexOf(needle);
};

/**
 *
 * @param {string} haystack
 * @param {string} needle
 * @returns {number}
 * My method using two pointers
 */
const strStr2 = (haystack, needle) => {
    if (haystack.length < needle.length) return -1;
    let l = 0,
        r = needle.length - 1;
    while (r < haystack.length) {
        if (haystack.slice(l, r + 1) === needle) return l;
    }
    return -1;
};

/**
 *
 * @param {string} haystack
 * @param {string} needle
 * @returns {number}
 * using KMP algorithm
 */
const strStr3 = (haystack, needle) => {
    // check if needle'length is 0 or not, return 0 if it has 0 length
    if (needle.length === 0) return 0;
    // function to get next array
    const getNext = (s) => {
        let next = [];
        next.push(0);
        let j = 0;
        for (let i = 1; i < s.length; i++) {
            while (j > 0 && s[i] !== s[j]) j = next[j - 1];
            if (s[i] === s[j]) next[i] = ++j;
            next.push(j);
        }
        return next;
    };

    let next = getNext(needle);
    let j = 0;
    for (let i = 0; i < haystack.length; i++) {
        while (j > 0 && haystack[i] !== needle[j]) j = next[j - 1];
        if (haystack[i] === needle[j]) j++;
        if (j === needle.length) return i - needle.length + 1;
    }
    return -1;
};
