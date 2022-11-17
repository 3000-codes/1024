/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
function removeDuplicates (nums: number[]): number {
  let prev:number = nums[0]
  for (let i = 1; i < nums.length;) {
    if (nums[i] === prev) {
      nums.splice(i, 1)
      continue
    }
    prev = nums[i]
    i++
  }
  return nums.length
};
// @lc code=end
