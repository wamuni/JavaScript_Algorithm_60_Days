/**
 *
 * @param {num} target
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = (target, nums) => {
    let left = (right = sum = 0);
    const len = nums.length;
    let res = len + 1;

    while (right < len) {
        sum += nums[right++];
        while (sum >= target) {
            sum -= nums[left++];
        }
        res = res < right - left ? res : right - left;
    }
    return res > len ? 0 : res;
};
