// const rev = (n:number) => {
//   let res = 0
//   while (n) {
//     res = res * 10 + n % 10
//     n = ~~(n / 10)
//   }
//   return res
// }

// function rev (n:number) {
//   let res = 0
//   while (n) {
//     res = res * 10 + n % 10
//     n = ~~(n / 10)
//   }
//   return res
// }
function countNicePairs (nums: number[]): number {
  const h:Map<number, number> = new Map()
  let count = 0
  const MOD = 1000000007
  for (let i = 0, len = nums.length; i < len; i++) {
    let orig = nums[i]
    let rev = 0
    while (orig) {
      rev = rev * 10 + orig % 10
      orig = ~~(orig / 10)
    }

    const inde = nums[i] - rev
    count = (count + (h.get(inde)! || 0)) % MOD
    h.set(inde, (h.get(inde)! || 0) + 1)
  }
  return count
};
console.log(countNicePairs([352171103, 442454244, 42644624, 152727101, 413370302, 293999243]))
