(function (_self) {
  /**
    将对象方法的this直接改为全局对象 (0,fn)(args)
   */
  _self.a = 1;
  const obj = {
    a: 2,
    getA() {
      return this.a;
    },
  };
  console.log(obj.getA()); // => 2
  const getA = obj.getA;
  console.log(getA()); // => 1
  console.log((void 0, obj.getA)()); // => 1
  console.log((obj.getA)()); // => 2
})(globalThis);

(function (_self) {
  // Object.assign合并真值
  // 只能合并可迭代的对象,数组,字符串
  const obj = {
    a: 1,
    b: 2,
    c: void 0,
  };
  const d = void 0,
    e = "e",
    f = 0,
    g = false,
    h = null,
    i = "",
    j = NaN,
    k = 1;
  Object.assign(
    obj,
    d && { d },
    e && { e },
    f && { f },
    g && { g },
    h && { h },
    i && { i },
    j && { j },
    k && { k }
  );
  Object.assign(obj);
  console.log(obj); // => {a: 1, b: 2, c: undefined, e: 'e', k: 1}
  const v1 = "abc";
  const v2 = true;
  const v3 = 10;
  const v4 = Symbol("foo");
  console.log(Object.assign({}, v1, null, v2, undefined, v3, v4)); // => {0: 'a', 1: 'b', 2: 'c'}
})(globalThis);
(function () {
  const delay = (ms: number) =>{console.log('delaying...'); return new Promise((resolve) => setTimeout(resolve, ms));}
  const fn1 = async () => {
    const start=performance.now();
    await delay(1000);
    await delay(500);
    return performance.now()-start;
  };
  const fn2 = async () => {
    const start=performance.now();
    const p1= delay(1000);
    const p2= delay(500);
    await p1;
    await p2;
    return performance.now()-start;
  }
  Promise.all([fn1(),fn2()]).then(([r1,r2])=>console.log(r1-r2)); 
  // Normally, fn1() is faster than fn2() about 500ms.
  // But in edge, the time difference is nearly 1000ms.
})();
(function () {
  // js不存在深克隆?
  const a:any={}
  a.a=a;
  const b=JSON.parse(JSON.stringify(a));
})();
(function () {
  // 深克隆 需要考虑的问题
  // 1.数据类型=>基本类型直接返回,引用类型递归
  // 2.特殊类型=>正则,日期,函数(native or 自定义)...
  // 3.特殊键名=>Symbol, __proto__, constructor(是否需要继承)
  // 4.是否可枚举=>for...in, Object.keys, Object.getOwnPropertyNames, Object.getOwnPropertySymbols
  // 5.循环引用=>Map,weakMap
  
})();

(async()=>{
  // 前端拥有读取根目录下文件的能力
  const html = await fetch('/').then(res => res.text());//读取index html
  return html
})()