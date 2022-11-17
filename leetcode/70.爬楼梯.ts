/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
function climbStairs (n: number): number {
// if(n===1) return 1
// if(n===2) return 2
// return climbStairs(n-1)+climbStairs(n-2)
  // const arr = [1, 1, 2]
  // if (!arr[n]) {
  //   for (let i = 3; i <= n; i++) {
  //     arr[i] = arr[i - 1] + arr[i - 2]
  //   }
  // }
  // return arr[n]
  const sqrt5 = Math.sqrt(5)
  const perfect1 = (1 + sqrt5) / 2
  const perfect2 = (sqrt5 - 1) / 2
  const res = (perfect1 ** (n + 1) - perfect2 ** (n + 1)) / sqrt5
  return Math.round(res)
};
// @lc code=end
