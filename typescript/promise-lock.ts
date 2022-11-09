type func=(...rest:unknown[])=>unknown
//原理展示
let _res:func=()=>{}
let p=new Promise(res=>{
  _res=res
})

function test(){
  console.log('我免费了');
}
p.then(test)

_res()