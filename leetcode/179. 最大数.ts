/* eslint-disable no-unused-vars */
function largestNumber (nums: number[]): string {
  if (nums[0] === 0) return '0'
  nums.sort((a, b) => {
    let sa = 10
    let sb = 10
    // 将两数提升至统一数量级进行比较
    while (sa <= a) {
      sa *= 10
    }
    while (sb <= b) {
      sb *= 10
    }
    return (sa * b + a) - (sb * a + b)
  })
  return nums.join('')
};
