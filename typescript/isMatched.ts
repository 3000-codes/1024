// function isMatched(expr:string):boolean{
//   const map=new Map([['}','{'],[']','['],[')','(']]),stack:string[]=[]
//   const lefty='([(',righty=')]}'
//   for(let ch of expr){
//     if(map.has(ch)){
//       stack.push(ch)
//     }else{
//       if(map.get(ch)!==stack.pop())return false
//     }
//   }
//   return !!stack.length
// }
console.log(isMatched('([{}])'));

function isMatched(expr:string):boolean{

  const lefty='([(',righty=')]}', stack:string[]=[]
  for(const ch of expr){
    if(lefty.includes(ch)){
      stack.push(ch)
    }else if(righty.includes(ch)){
      if(!stack.length) return false
      let temp=stack.pop()!
      let indexF=lefty.indexOf(temp)
      let indexR=righty.indexOf(ch)
      if(indexF!==indexR) return false
    }
  }
  return !stack.length
}