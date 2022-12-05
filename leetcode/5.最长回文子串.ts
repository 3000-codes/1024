/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
function isPalindromeStr (s: string): boolean {
  return s === s.split('').reverse().join('')
}
function longestPalindrome (s: string): string {
  let result = ''
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      const str = s.slice(i, j)
      if (isPalindromeStr(str) && str.length > result.length) {
        result = str
      }
    }
  }
  return result
}
console.log(longestPalindrome('babad'))

// @lc code=end
