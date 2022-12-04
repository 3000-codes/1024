/*
 * @lc app=leetcode.cn id=2409 lang=typescript
 *
 * [2409] 统计共同度过的日子数
 */

// @lc code=start
function countDaysTogether (arriveAlice: string, leaveAlice: string, arriveBob: string, leaveBob: string): number {
  const a1 = new Date('2021-' + arriveAlice).getTime()
  const l1 = new Date('2021-' + leaveAlice).getTime()
  const a2 = new Date('2021-' + arriveBob).getTime()
  const l2 = new Date('2021-' + leaveBob).getTime()
  const arr=[
    {name:'a',time:a1},{name:'a',time:l1},
    {name:'b',time:a2},{name:'b',time:l2},
].sort((a,b)=>a.time-b.time)

console.log(arr);

if(arr[1].name===arr[0].name)
  // if (a2 > a1) {
  //   // b来之前离开
  //   if (l1 < a2) {
  //     return 0
  //   } else if (l1 > a2 && l1 < l2) {
  //   // 期间离开
  //     return (l1 - a2) / 86400000 + 1
  //   } else { // 之后离开
  //     return (l2 - a2) / 86400000 + 1
  //   }
  // } else if (a2 < a1) {
  //   // b来之前离开
  //   if (l2 < a1) {
  //     return 0
  //   } else if (l2 > a1 && l2 < l1) {
  //   // 期间离开
  //     return (l2 - a1) / 86400000 + 1
  //   } else { // 之后离开
  //     return (l1 - a1) / 86400000 + 1
  //   }
  // } else {
  //   if (l1 === l2) (l2 - a2) / 86400000 + 1
  //   return 1
  // }

// if()

};
// @lc code=end
