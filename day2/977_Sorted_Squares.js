/**
 *
 * @param {number[]} nums
 */
const sortedSquares = (nums) => {
    let left = 0;
    let right = nums.length - 1;
    let res = [];
    while (left <= right) {
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            res.push(nums[left] * nums[left]);
            left++;
        } else {
            res.push(nums[right] * nums[right]);
            right--;
        }
    }
    return nums.reverse();
};
