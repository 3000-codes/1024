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

(async()=>{
  // 前端拥有读取根目录下文件的能力
  const html = await fetch('/').then(res => res.text());//读取index html
  return html
})();

(function () {
  // 移除指定位置的数组元素
  const arr=[1,2,3,4,5];
  // arr.splice(2,1);
  function removeElement(arr:unknown[],from:number,to:number){
    const rest=arr.slice((to||from)+1||arr.length);
    arr.length=from<0?arr.length+from:from;
    arr.push(...rest);
  }
})();

(function () {
// 声明语句(var,let,const)没有返回值
// 表达式语句(函数调用,赋值,运算符)有返回值(实际上是返回 变量的值)
[1,2,3,4].reduce((pre,cur,i)=>pre+=cur,0); // 10
// 语句块({})没有返回值
var a=1; // undefined
a=2; // 2
var b=a=3; // 3

// 所以下面语句是这样产生的全局变量
// var x=y=1; // var x=(window.y=1);

// 通过 var声明的全局变量无法通过delete删除 但是隐式声明的全局变量可以


}
)();
(function () {
const str='dsfsdfsdf'
return str.match(/.{1,2}/g) // 将字符串以2个字符做切割,生产的数组
}

)();

(function () {
  // 监听浏览器开发者工具打开
  console.log(Object.defineProperties(new Error, {
      message: { get() { alert('Chrome/Firefox') } },
      toString: { value() { (new Error).stack!.includes('toString@') && alert('Safari') } }
  }));

})();