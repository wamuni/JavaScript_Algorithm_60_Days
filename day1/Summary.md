#### 704 题解

704 二分查找，我写了一种解法，是左闭右闭的解法，即：在更新左右边界的坐标的时候，比较的元素是包括边界的

```javascript
const search (nums, target) => {
    let left = 0 // 初始化左边界，即数组的第一个元素
    let right = nums.length - 1 //初始化右边界，即数组的最后一个元素
    
    //开始进行循环，基本思路就是：先取中间的元素，和target进行比较，如果如果target > mid，那么说明target应该在较大的区间，如果 target < mid， 那么就说明 target应该在较小的区间；然后根据落在哪个区间对边界进行调整
    while (left <= right) { // 因为我门使用的是左闭右闭的解法，那么当left === right的时候，该元素也是可取的
        const mid = Math.floor((left + right) / 2) // 实验下来最快的求中间值的方法
        const num = nums[mid]
        
        if (num === target) {
            return mid 
        } else if (num < target) {
            left = mid + 1 // 如果num < target， 说明target应该在右边的区间， 应该更新left指针
        } else {
            right = mid - 1
        }
    }
    return -1
}
```

注意事项：不知道为何，在使用`Math.floor` 计算中间值的时候，速度最快