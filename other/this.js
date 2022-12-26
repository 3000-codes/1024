(()=>{
  function fn1(a,b){
    console.log(a,b,'outer this',this)
    return function(c,d){
      console.log(a,b,c,d,'inner this',this)
    }
  }
  console.log('----apply-----')
  fn1.apply({a:1},[1,2])(3,4)
  console.log('----call-----')
  fn1.call({a:1},1,2)(3,4)
  console.log('----bind-----')
  fn1.bind({a:1},1,2)(3,4)
})()
;
(()=>{
  function safeEqual(a,b){
    if(a===b){
      return true
    }
    if(typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b)){
      return true
    }
    return false
  }
})()
