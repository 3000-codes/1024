function fn1() {
  const arr = Array(1000000000);
  const name = arguments.callee.name;
  console.time(name);
  let i = 0,
    len = arr.length;
  for (; i < len; i++) {}
  console.timeEnd(name);
}
function fn2() {
  const arr = Array(1000000000);
  const name = arguments.callee.name;
  console.time(name);
  let i, len;
  for (i = 0, len = arr.length; i < len; i++) {}
  console.timeEnd(name);
}
function fn3() {
  const arr = Array(1000000000);
  const name = arguments.callee.name;
  console.time(name);
  for (let i = 0, len = arr.length; i < len; i++) {}
  console.timeEnd(name);
}
function fn4() {
  const arr = Array(1000000000);
  const name = arguments.callee.name;
  console.time(name);
  for (let i = 0; i < arr.length; i++) {}
  console.timeEnd(name);
}
function fn5() {
  const arr = Array(1000000000);
  const name = arguments.callee.name;
  console.time(name);
  let i = arr.length;
  for (; i--; ) {}
  console.timeEnd(name);
}
function fn6() {
  const arr = Array(1000000000);
  const name = arguments.callee.name;
  console.time(name);
  for (let i = arr.length; i--; ) {}
  console.timeEnd(name);
}

function fn7() {
  const arr = Array(1000000000);
  const name = arguments.callee.name;
  console.time(name);
  let i = arr.length - 1;
  for (; i > -1; i--) {}
  console.timeEnd(name);
}

function fn8() {
  const arr = Array(1000000000);
  const name = arguments.callee.name;
  console.time(name);
  for (let i = arr.length - 1; i > -1; i--) {}
  console.timeEnd(name);
}

[fn1, fn2, fn3, fn4, fn5, fn6, fn7, fn8].forEach(fn => fn());
