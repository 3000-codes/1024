/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum (nums: number[], target: number): number[] {
  const map:Map<number, number> = new Map()
  for (let i = 0; i < nums.length; i++) {
    const res = target - nums[i]
    if (map.has(res)) {
      return [map.get(res)!, i]
    }
    map.set(nums[i], i)
  }
  return []
};
// @lc code=end

const res = twoSum(
  [2, 7, 11, 15], 9)
console.log(res)
