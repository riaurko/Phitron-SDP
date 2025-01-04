const nums = [1, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10]
let MaxNum = 0

for (let i = 0; i < nums.length; i++) {
    if (nums[i] > MaxNum)
        MaxNum = nums[i]
}
console.log(MaxNum);