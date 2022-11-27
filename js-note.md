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