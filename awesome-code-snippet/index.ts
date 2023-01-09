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
