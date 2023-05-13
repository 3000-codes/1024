### 事件循环

- 事件循环是一个程序结构，用于等待和发送消息和事件。
- 事件循环是一个无限循环，用于等待事件并执行任务。

+ 微任务
  - 微任务是一个需要异步执行的函数，它会在当前任务结束后立即执行。
  - 微任务包括：process.nextTick、promise、MutationObserver
  - 微任务的执行时机是在当前宏任务执行结束后，下一个宏任务开始之前。
  - 微任务优先级：process.nextTick > promise.then > MutationObserver
+ 宏任务
  - 宏任务是一个需要异步执行的函数，它会在当前任务结束后立即执行。
  - 宏任务包括：setTimeout、setInterval、setImmediate、I/O、UI rendering
  - 宏任务的执行时机是在当前宏任务执行结束后，下一个宏任务开始之前。
  - 宏任务优先级：setImmediate > MessageChannel > setTimeout/setInterval

+ 事件循环的执行顺序
  - 执行同步代码，这属于宏任务
  - 执行栈为空，查询是否有微任务需要执行
  - 执行所有微任务
  - 必要的话渲染 UI
  - 然后开始下一轮 Event Loop，执行宏任务中的异步代码