/*
 * @lc app=leetcode.cn id=71 lang=typescript
 *
 * [71] 简化路径
 * /a/./b//../../c/
 * => [_,a,.,b,_,..,..,c,_]
 * _    :不处理
 * .    :不处理
 * ..   :出栈
 * 其他 :进栈
 */

// @lc code=start
function simplifyPath(path: string): string {
const stack :string[]=[]
let pathArr=path.split('\/')
let len=pathArr.length
for(let i=0;i<len;i++){
  const cur=pathArr[i]
  if(cur){
    if(cur=='..') stack.pop()
    else if(cur!=='.') stack.push(cur)
  }
  else continue
}

return len?'/'+stack.join('/'):'/'
};
// @lc code=end

