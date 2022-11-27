import express from'express'

const app=express()
const port=9527
const STU_ARR=Array.from({length:10},(_,index)=>({name:'张'+index,age:10+index}))

app.get('/student',(req,res)=>{
res.send(STU_ARR)
})

app.listen(port,()=>{
    console.log('listening...');
    
})