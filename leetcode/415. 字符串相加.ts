function addStrings (num1: string, num2: string): string {
  let i = num1.length - 1; let j = num2.length - 1; let curry = 0
  const res :number[] = []
  while (i >= 0 || j >= 0 || curry !== 0) {
    const x = +(num1[i] || 0)
    const y = +(num2[j] || 0)
    const tmp = x + y + curry
    res.push(tmp % 10)
    curry = Math.floor(tmp / 10)
    i--
    j--
  }
  return res.reverse().join('')
}

// let len = Math.max(num1.length, num2.length)
// let curry = 0
// const res:number[] = []
// num1 = num1.padStart(len, '0')
// num2 = num2.padStart(len, '0')
// len--
// while (num1[len] !== undefined || num2[len] !== undefined) {
//   let temp = (+num1[len] || 0) + (+num2[len] || 0) + curry
//   if (temp > 9) {
//     temp -= 10
//     curry = 1
//   } else {
//     curry = 0
//   }
//   res.push(temp)
//   len--
// }
// curry && res.push(1)
// return res.reverse().join('')
