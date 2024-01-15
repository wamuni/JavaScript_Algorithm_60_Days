/**
 *
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
const twoSum = (nums, target) => {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) return [i, map.get(target - nums[i])];
        map.set(nums[i], i);
    }
    return [];
};
