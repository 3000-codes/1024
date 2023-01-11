```js
class Test {
  name = 'hhhh';
  [Symbol.toPrimitive](hint) {
    // return false
    console.log('hint ', hint)
    // return 1
    switch (hint) {
      case 'number':
        return 333
      case 'string':
        return 'hello world'
      // default:
      //   return this
    }
  }
}
let t = new Test()
// console.log(t)
// console.log(t + 1)
// console.log(t + '')
console.log(t&&1);
// if(t) {}
```
```js
/**
 * @param {string} template template
 * @description 让html字符串可以在js文件中语法高亮(该工具函数需搭配vscode插件lit-html支持)
 */
function html (template, ...rest) {
  const len = template.length
  let res = ''
  for (let i = 0; i < len; i++) {
    res += (template[i] + (rest[i] || ''))
  }
  return res
}
```
```shell
pnpm config set store-dir "D:\.pnpm-store" # pnpm全局仓库路径(类似 .git 仓库)
pnpm config set global-dir "D:\nodejs\pnpm\pnpm-global" # pnpm全局安装路径
pnpm config set global-bin-dir "D:\nodejs" # pnpm全局bin路径
pnpm config set state-dir "D:\nodejs\pnpm" # pnpm创建pnpm-state.json文件的目录
pnpm config set cache-dir "D:\nodejs\pnpm\cache" # pnpm全局缓存路径
```

### delete运算符到底在干嘛

```js
delete 0
delete x
delete obj.a
```
显然,delete运算符无法删除一个原始值的,所以delete是在销毁标识符,而不是销毁值.
所以，“delete x”归根到底，是在 **删除一个表达式的、引用类型的结果（Result）**，而不是在 **删除x表达式**，或者这个 **删除表达式的值（Value）**。

```js
//删除一个不存在的标识:在JavaScript原始版本中，没有异常捕获机制，所以这里不会报错
delete x  // => true
//删除一个只读属性
var obj = {x: 1}
Object.defineProperty(obj, 'x', {writable: false})
delete obj.x  // => true
```

### 变量的声明方式
严格意义上说应该为变量和常量
声明变量的方式:var let function clasee
声明常量的方式:const import 
未通过声明方式产生的变量:try catch(error)
```js
try {
  console.log(a)
} catch (error) {
  error.message = 'a is not defined'
  console.log('error', error)
}
```
### a.x=a={n:2}引发的思考
```js
var a = {n:1},ref=a;
a.x=a={n:2};
console.log(a.x) // undefined
console.log(ref.x) // {n:2}
console.log(a) // {n:2}
```
上述代码的执行过程: a.x=a={n:2} 会先执行a.x=a,此时a.x=a的值为{ n: 2 },然后再执行a={n:2},此时a的值为{ n: 2 }
#### 复现经过
```js
var a={n:1}
Object.freeze(a)
try {
  a.x=a={n:2}
} catch (error) {
  // 异常发生，说明第二次赋值“a.x = ...”中操作的`a`正是原始的变量a
  console.log('error', error)
}
// 第一次赋值是成功的
console.log(a.n); //
```
#### 代码可以用来干嘛(创建链表)
```js
var i=10,root={index:null},node=root;
while(i--){
  node.next=node={index:i}
}
//测试
 node=root;
while(node){
  console.log(node.index)
  node=node.next
}
```


### 数组for遍历快慢
常见遍历方式
```ts
// 正序
let i=0,len=arr.length;
for(;i<len;i++){}

let i,len
for(i=0,len=arr.length;i<len;i++){}

for(let i=0,len=arr.length;i<len;i++){}

for(let i=0;i<arr.length;i++){}

// 逆序
let i=arr.length
for(;i--;){}

for(let i=arr.length;i--;){}

let i=arr.length-1
for(;i>-1;i--){}

for(let i=arr.length-1;i>-1;i--){}
```
运行时间第一次数最多的 8 :4次  1/2/4/7各2次
运行时间第二次数最多的(排除8) 1 :3次  2/6/7各2次
运行时间第三次数最多的(排除1,8) 2 :4次  6 :3次  5 :2次

大致断定8>2≈1>7≈6>5
