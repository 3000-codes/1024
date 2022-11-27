/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid (s: string): boolean {
    type sym={
        [key:string]:string
      }
    const map:sym = {
      ']': '[',
      ')': '(',
      '}': '{'
    }
    const stack = []
    for (let i = 0; i < s.length; i++) {
      const ch = s[i]
      if (ch in map) {
        const tem = stack.pop()
        if (tem !== map[ch]) return false
      } else {
        stack.push(ch)
      }
    }
    return !stack.length
};
// @lc code=end
