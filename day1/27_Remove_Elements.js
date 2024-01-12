/**
 *
 * @param {number[]} nums
 * @param {num} val
 */
const removeElement = (nums, val) => {
    let slow = 0;
    let fast = 0;
    while (fast < nums.length) {
        if (nums[fast] !== val) {
            nums[slow] = nums[fast];
            slow++;
        }
        fast++;
    }
    return slow;
};

const removeElement_Soluation_Two = (nums, val) => {
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] === val) {
            nums.splice(i, 1);
        }
    }
    return nums.length;
};
