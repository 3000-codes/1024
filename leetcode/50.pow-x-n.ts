/*
 * @lc app=leetcode.cn id=50 lang=typescript
 *
 * [50]  Pow(x, n)
 * 偶数： Pow(x,n )=Pow(x,n/2)*Pow(x,n/2)=Pow(x*x,n/2)
 * 奇数： Pow(x,n )=x*Pow(x,n/2)*Pow(x,n/2)=x*Pow(x*x,n/2)
 * n=0=>1
 * n=1=>x
 * n<0=>Pow(x, n)=Pow(1/x, -n)
 */

// @lc code=start
function myPow (x: number, n: number): number {
  if (n < 0) {
    x = 1 / x
    n = -n
  }
  if (n === 0) return 1
  if (n === 1) return x
  if (n % 2) {
    return x * myPow(x * x, (n - 1) / 2)
  }
  return myPow(x * x, n / 2)
};
// @lc code=end
