/**
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 */
const intersection = (nums1, nums2) => {
    let result = new Set();
    const set = new Set(nums1);
    for (const i of nums2) {
        if (set.has(i)) result.add(i);
    }
    return Array.from(result);
};
