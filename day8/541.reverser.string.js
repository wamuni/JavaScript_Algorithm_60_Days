/**
 *
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const reverseStr = (s, k) => {
    const len = s.length;
    for (let i = 0; i < len; i += 2 * k) {
        let l = i,
            r = i + k > len ? len - 1 : i + k - 1;
        while (l < r) {
            s[l], (s[r] = s[r]), s[l];
            l++;
            r--;
        }
    }
};
