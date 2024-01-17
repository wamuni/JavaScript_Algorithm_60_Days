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
