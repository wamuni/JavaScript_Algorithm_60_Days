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