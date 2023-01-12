const arr = [8, 7, 6, 5, 4, 3, 2, 1]
console.log(arr)

const merge = (nums:number[], left:number, mid:number, right:number) => {
  // 初始化辅助数组
  const tmp = nums.slice(left, right + 1)
  // 左子数组的起始索引和结束索引
  const leftStart = left - left
  const leftEnd = mid - left
  // 右子数组的起始索引和结束索引
  const rightStart = mid + 1 - left
  const rightEnd = right - left
  // i, j 分别指向左子数组、右子数组的首元素
  let i = leftStart
  let j = rightStart
  for (let k = left; k <= right; k++) {
    // 若“左子数组已全部合并完”，则选取右子数组元素，并且 j++
    if (i > leftEnd) {
      nums[k] = tmp[j++]
      // 否则，若“右子数组已全部合并完”或“左子数组元素 <= 右子数组元素”，则选取左子数组元素，并且 i++
    } else if (j > rightEnd || tmp[i] <= tmp[j]) {
      nums[k] = tmp[i++]
      // 否则，若“左右子数组都未全部合并完”且“左子数组元素 > 右子数组元素”，则选取右子数组元素，并且 j++
    } else {
      nums[k] = tmp[j++]
    }
  }
}

const mergeSort = (nums:number[], left:number = 0, right:number = arr.length - 1) => {
  // 终止条件
  if (left >= right) return // 当子数组长度为 1 时终止递归
  // 划分阶段
  const mid = Math.floor((left + right) / 2) // 计算中点
  mergeSort(nums, left, mid) // 递归左子数组
  mergeSort(nums, mid + 1, right) // 递归右子数组
  // 合并阶段
  merge(nums, left, mid, right)
}
// const arr = Array.from({ length: 25 }, () => Math.floor(Math.random() * 100))
mergeSort(arr)
console.log(arr)
export {}
