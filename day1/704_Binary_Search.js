/**
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((right - left) / 2) + left;
        const num = nums[mid];

        if (target === num) {
            return mid;
        } else if (target > num) {
            right = mid + 1;
        } else {
            left = mid - 1;
        }
    }
    return -1;
};
