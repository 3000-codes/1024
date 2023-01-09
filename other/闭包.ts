// 当函数可以记住并访问所在的词法作用域时，就产生了闭包，即使函数是在当前词法作用域之外执行。
(function () {
  // 广义上的闭包
  function foo() {
    const a = 1;
    function bar() {
      console.log(a);
    }
    bar();
  }
  foo();
  // 基于词法作用域的查找规则，函数bar() 可以访问外部作用域中的变量 a
})();
(function () {
  // 标准的闭包
  function foo() {
    const a = 1;
    function bar() {
      console.log(a);
    }
    return bar;
  }
  const baz = foo();
  baz();
  // 函数bar() 作为值被返回，这个返回值被外部作用域中的变量 baz 引用，因此 bar() 依然可以访问外部作用域中的变量 a
})();
(function () {
  // 无论使用何种方式对函数类型的值进行传递，当函数在别处被调用时都可以观察到闭包
  function foo() {
    const a = 1;
    function baz() {
      console.log(a);
    }
    bar(baz);
  }
  function bar(fn: Function) {
    fn();
  }
  foo();
})();
(function () {
  // 间接引用
  let fn: Function | undefined;
  function foo() {
    const a = 1;
    function baz() {
      console.log(a);
    }
    fn = baz;
  }
  function bar() {
    fn && fn();
    // fn!()
  }
  foo();
  bar();
})();
