const resolvedPromise = /*#__PURE__*/ Promise.resolve() as Promise<any>
let currentFlushPromise: Promise<void> | null = null
function nextTick<T = void>(
  this: T,
  fn?: (this: T) => void
): Promise<void> {
  const p = currentFlushPromise || resolvedPromise
  return fn ? p.then(this ? fn.bind(this) : fn) : p
}

nextTick(()=>{
  console.log(1)
})
class Test{
  a:number = 1
  test(r:unknown){
    nextTick(()=>{
      console.log(this.a,r)
    })
    return 1
  }
}
// ts中函数中this需要指定类型，否则会报错
function test<T = Test>(this:T,b:number):void{
  console.log(this,new Test().test(b))
}

test(2)

