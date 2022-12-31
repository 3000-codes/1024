/* eslint-disable no-extend-native */
if (!Function.prototype.softBind) {
  Function.prototype.softBind = function (obj) {
    const fn = this
    // 捕获所有 curried 参数
    const curried = [].slice.call(arguments, 1)
    const bound = function () {
      return fn.apply(
        (!this || this === (window || global)) ? obj : this,
        curried.concat.apply(curried, arguments)
      )
    }
    bound.prototype = Object.create(fn.prototype)
    return bound
  }
}

function foo () {
  console.log('name: ' + this.name)
}
const obj = { name: 'obj' }
const obj2 = { name: 'obj2' }
const obj3 = { name: 'obj3' }
const fooOBJ = foo.softBind(obj)
fooOBJ() // name: obj
obj2.foo = foo.softBind(obj)
obj2.foo() // name: obj2 <---- 看！！！
fooOBJ.call(obj3) // name: obj3 <---- 看！
setTimeout(obj2.foo, 10)
// name: obj <---- 应用了软绑定
