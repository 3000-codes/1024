/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 */

// @lc code=start
function removeElement (nums: number[], val: number): number {
  for (let i = 0; i < nums.length;) {
    if (nums[i] === val) {
      nums.splice(i, 1)
      continue
    }
    i++
  }
  return nums.length
};
// @lc code=end
