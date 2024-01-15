/**
 *
 * @param {number[]} nums
 * @returns {number[][]}
 */
const threeSum = (nums) => {
    let res = [],
        len = nums.length;
    for (let i = 0; i < len; i++) {
        let l = i + 1,
            r = len - 1,
            n = nums[i];
        if (n > 0) return res;
        if (n === nums[i - 1]) continue;

        while (l < r) {
            let ln = nums[l],
                lr = nums[r],
                sum = n + lr + ln;
            if (sum < 0) l++;
            else if (sum > 0) r--;
            else {
                res.push([ln, lr, n]);
                while (l < r && ln === nums[l + 1]) l++;
                while (l < r && lr === nums[r - 1]) r--;
                l++;
                r--;
            }
        }
    }
};
