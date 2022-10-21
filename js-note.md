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