函数组件
+ 静态组件 ,一次渲染后不会再次渲染,除非父组件重新渲染
+ 无生命周期

PureComponent与Component

+ PureComponent 会对props和state进行浅比较,如果有变化,则重新渲染
+ PureComponent 相当于Component+shouldComponentUpdate

forwordRef
+ 高阶组件,用于转发ref
+ 用于转发ref,使得父组件可以获取子组件的ref

setState(state, callback)
+ state: 可以是对象,也可以是函数
+ callback: 可选,在state更新后执行
+ setState是异步的批量更新的,如果需要获取更新后的state,需要在callback中获取
+ 可以有效减少更新次数,提高性能
+ 原理(更新队列updater)
  - 在时间段内,将多次setState合并成一个updater
  - 此时状态/视图未更新
  - 所有代码执行完毕后,执行updater,更新状态/视图
ps:在react16中,在事件处理函数中,setState是同步的

flushSync
+ 用于同步执行任务,可以使得setState同步执行
```js
function handleClick() {
  flushSync(() => {
    setCount(3);
    setFlag(true);
  });
  // setCount 和 setFlag 为批量更新，结束后
  setLoading(false);
  // 此方法会触发两次 render
}
```

函数式组件的useState
+ useState返回一个数组,第一个元素是state,第二个元素是更新state的函数
+ useState可以接受一个函数作为参数,该函数的返回值作为初始state
+ useState的更新函数可以接受一个函数作为参数,该函数的返回值作为新的state,该函数接受一个参数,为当前的state,返回值为新的state
+ useState的更新函数可以接受一个对象作为参数,该参数会覆盖原状态


useEffect
+ useEffect接受一个函数作为参数,该函数会在组件渲染后执行
+ useEffect接受第二个参数,该参数为一个数组,数组中的元素为依赖项,当依赖项发生变化时,会执行useEffect中的函数
+ useEffect返回一个函数,该函数会在组件卸载前执行