/**
 *
 * @param {string} s
 * @return {void} Do not return anything, modify s in-place instead.
 * 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。
 */
const reverseString = (s) => {
    const len = s.length;
    if (len === 1) return s;
    let l = 0,
        r = len - 1;
    while (l < r) {
        const temp = s[l];
        s[l] = s[r];
        s[r] = temp;
        l++;
        r--;
    }
};
