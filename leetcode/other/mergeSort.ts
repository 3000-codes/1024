type Merge<T>=(...args:T[])=>T
const merge:Merge<number[]> = (left, right) => {
  const result:number[] = []
  while (left.length && right.length) {
    // 右边左边进行比较,推入较小的首位,并从原数组中删除,直至其中一个数组为空
    if (left[0] < right[0]) {
      result.push(left.shift()!)
    } else {
      result.push(right.shift()!)
    }
  }
  // 将剩余的数组推入结果数组
  return result.concat(left, right)
}

const mergeSort:Merge<number[]> = (arr) => {
  if (arr.length < 2) return arr
  const mid:number = Math.floor(arr.length / 2)
  const left = arr.slice(0, mid)// [8,7,6,5]=>...=>[8],[7]|[6],[5]=>[7,8]|[5,6]=>[5,6,7,8]
  const right = arr.slice(mid)// [4,3,2,1]=>[3,4,1,2]=>...(同上)=>[1,2,3,4]           =>[5,6,7,8]|[1,2,3,4]=>[1,2,3,4,5,6,7,8]
  return merge(mergeSort(left), mergeSort(right))
}
// const arr = Array.from({ length: 25 }, () => Math.floor(Math.random() * 100))
const arr = [8, 7, 6, 5, 4, 3, 2, 1]
console.log(arr)
console.log(mergeSort(arr) === arr)
