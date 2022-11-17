/*
 * @lc app=leetcode.cn id=231 lang=typescript
 *
 * [231] 2 的幂
 */

// @lc code=start
function isPowerOfTwo (n: number): boolean {
  if (n === 1) return true
  let res = 1
  while (res < n) {
    res <<= 1
    if (res === n) return true
  }
  return false
};
// @lc code=end
