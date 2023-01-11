// 递龟
function fibo1(n: number): number {
  if (n <= 1) {
    return n;
  }
  return fibo1(n - 1) + fibo1(n - 2);
}

// 循环
function fibo2(n: number): number {
  if (n <= 1) {
    return n;
  }
  let a = 0;
  let b = 1;
  let c = 0;
  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return c;
}
// 迭代
function* fibo3(n:number) {
  let a = 0;
  let b = 1;
  let c = 0;
  for (let i = 0; i <= n; i++) {
    yield a;
    c = a + b;
    a = b;
    b = c;
  }
}

// 尾递归
function fibo4(n: number, a = 0, b = 1): number {
  if (n <= 1) {
    return b;
  }
  return fibo4(n - 1, b, a + b);
}

// 缓存
function fibo5(n: number): number {
  const cache = [0, 1];
  const fibo = (n: number): number => {
    if (cache[n] !== undefined) {
      return cache[n];
    }
    cache[n] = fibo(n - 1) + fibo(n - 2);
    return cache[n];
  };
  return fibo(n);
}
// 公式
function fibo6(n: number): number {
  return Math.round(
    (Math.pow((1 + Math.sqrt(5)) / 2, n) - Math.pow((1 - Math.sqrt(5)) / 2, n)) /
      Math.sqrt(5)
  );
}

const runtime = (fn: Function):number => {
  const start = performance.now();
  for(let i = 0; i < 10000; i++) {
    fn(i);
  }
  return performance.now() - start;
};
[fibo1, fibo2, fibo4, fibo5].forEach((fn) => {
  console.log(fn.name, runtime(fn));
});
