/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
function longestPalindrome (s: string): string {
  const len = s.length
  const max = 1
  let index = 1
  for (let i = 1; i < len - 1; i++) {
    const str = s[i]
    let count = 1; let left = i - 1; let right = i + 1
    while (s[left] === s[right] && left > -1 && right <= len) {
      count++
      left -= count
      right += count
      if (count > max) {
        index = i
      }
    }
  };
  return index + ''
}
console.log(longestPalindrome('babad'))

// @lc code=end
