## 全局变量

+ 通过var创建的全局变量（在任何函数体之外创建的变量）不能被删除。
+ 没有用var创建的隐式全局变量（不考虑函数内的情况）可以被删除。

```ts
// 获取全局对象(严格模式下，this为undefined)
let global=(function(){return this})();
```

### 单var模式

在函数的顶部使用唯一一个var语句是非常推荐的一种模式，它有如下一些好处：

+ 在函数的顶部声明所有变量，可以让我们一眼就能看出函数内部使用了哪些变量。
+ 避免在变量声明之前使用这个变量时产生的逻辑错误
+ 提醒你不要忘记声明变量，顺便减少潜在的全局变量
+ 代码量更少（输入代码更少且更易做代码优化）
```js
function func() {
	var a = 1,
		b = 2,
		sum = a + b,
		myobject = {},
		i,
		j;
	// 函数体…
}
```
#### for循环

在for循环中，可以对数组或类似数组的对象（比如arguments和HTMLCollection对象）进行遍历，通常for循环模式形如

```js
// 非最优的循环方式
for (var i = 0; i < myarray.length; i++) {
	// 访问myarray[i]…
}
```

这种模式的问题是，每次遍历都会访问数组的length属性，这会降低代码运行效率，特别是当myarray不是一个数组而是一个HTMLCollection对象的时候。这些对象的问题在于，它们都会实时查询文档（HTML页面）中的对象。也就是说每次通过它们访问集合的length属性时，总是都会去查询DOM，而DOM操则是很耗资源的。

```js
for (var i = 0, max = myarray.length; i < max; i++) {
	// 访问myarray[i]…
}
```

