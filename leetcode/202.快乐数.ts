/*
 * @lc app=leetcode.cn id=202 lang=typescript
 *
 * [202] 快乐数
 * 1 true
 * 2=>4=>16=>37=>58=>89=>145=>42=>20=>4 false
 * 3=>9=>81=>65=>61=>37 false
 * 4 false
 * 5=>25=>29=>85=>89 false
 * 6=>36=>45=>41=>17=>50=>25 false
 * 7=>49=>97=>130=>10 true
 * 8=>64=>52=>29 false
 * 9 false
 */

// @lc code=start
function getNext(num:number):number{
  let res=0
  while(num>0){
    res+=(num%10)**2
    num=Math.floor(num/10)
  }
  return res
}
function isHappy(n: number): boolean {
  const set=new Set()
  while(n!==1){
    n=getNext(n)
    if(set.has(n)){
      return false
    }
    set.add(n)
  }
  return true
};

// @lc code=end

