const errorFirstMaker=(promise)=>promise.then(res=>[null,res],err=>[err])

const p1= Promise.resolve('success')
const p2=Promise.reject('failed')

const efp1=errorFirstMaker(p1)
const efp2=errorFirstMaker(p2);

(async()=>{
  const res1=await efp1
  const res2=await efp2
  console.log(res1,res2);
})()