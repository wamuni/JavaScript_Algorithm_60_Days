/**
 *
 * @param {string} s
 * @param {number} k
 */
const reverse = (s, k) => {
    const arr = s.split('');
    arr.reverse();
    let l = 0,
        r = k - 1;
    while (l++ < r--) {
        [arr[l], arr[r]] = [arr[r], arr[l]];
    }
    let ls = k - 1,
        rs = arr.length;
    while (++ls < --rs) [arr[ls], arr[rs]] = [arr[rs], arr[ls]];
    return arr.join('');
};

console.log(reverse('abcdefg', 2));
