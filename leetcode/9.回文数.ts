/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 */

// @lc code=start
function isPalindrome(x: number): boolean {
  if(x<0) return false
  let str=x.toString()
  let start=0,end=str.length-1
  while(start<end){
    if(str[start]!==str[end]) return false
    start++
    end--
  }
  return true
};
// @lc code=end

