#### 977 题解

这道题需要使用双指针，但是双指针的起始位置和之前遇到的不同，本题的解题思路需要从两端开始

```javascript
const sortedSquares = (nums) => {
    let left = 0;
    let right = nums.length - 1;
    let res = [];
    while (left <= right) {
        if (Math.abs(nums[left]) < Math.abs(nums[right])) {
            res.push(nums[right] * nums[right]);
            right--;
        } else {
            res.push(nums[left] * nums[left]);
            left++;
        }
    }
    return res.reverse();
}
```

详解：

1. 如果是正常的情况下，应该是在res的第一个加，但是JavaScript中的unshift() 效率太低了，还是用push，然后在反转一下
2. 要求是时间复杂度为$O(n)$ 的方法，所以双指针是比较不错的选择
3. 本题的双指针需要从两边开始，寻找最大的，因为最大的更加有确定性

#### 209 题解

该题需要使用滑动窗口来解决，滑动窗口本质是双指针的另外一种应用

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const minSubArrayLen = (target, nums) => {
	let left = right = sum = 0;
    const len = nums.length;
    let res = len + 1;
    
    while (right < len) {
        sum += nums[right++];
        while (sum >= target) {
            sum -= nums[left++];
            res = res < (right - left) ? res : (right - left);
        }
    }
    return res > len ? 0 : res;
}
```

基本思路就是：首先让右指针开始向右把元素加起来，如果相加的结果大于target，那么就开始从左开始减，同时对长度来进行比较从而进行更新。

还是有问题需要思考：还是要注意边界
