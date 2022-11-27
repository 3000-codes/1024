
const num = 31

function test (num:number):string {
  const stack = []
  while (num) {
    stack.push(num % 2)
    num = Math.floor(num / 2)
  }
  return stack.reverse().join('')
}
console.log(test(num))
