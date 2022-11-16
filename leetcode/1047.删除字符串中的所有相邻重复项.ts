/*
 * @lc app=leetcode.cn id=1047 lang=typescript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
function removeDuplicates(s: string): string {
const stack:string[]=[]
for(let v of s){
  const prev=stack.pop()
  if(prev!==v){
    prev&& stack.push(prev)
    stack.push(v)
  }
}
return stack.join('')
};
// @lc code=end

