函数组件
+ 静态组件 ,一次渲染后不会再次渲染,除非父组件重新渲染
PureComponent与Component

+ PureComponent 会对props和state进行浅比较,如果有变化,则重新渲染
+ PureComponent 相当于Component+shouldComponentUpdate

forwordRef
setState(state, callback)
+ state: 可以是对象,也可以是函数
+ callback: 可选,在state更新后执行
+ setState是异步的批量更新的,如果需要获取更新后的state,需要在callback中获取
+ 可以有效减少更新次数,提高性能
+ 原理(更新队列updater)
  - 在时间段内,将多次setState合并成一个updater
  - 此时状态/视图未更新
  - 所有代码执行完毕后,执行updater,更新状态/视图