// 线程锁
let isLock = false;
let lockList = [];
async function lock() {
  function unlock() {
    let waitFunc = lockList.shift();
    if (waitFunc) {
      waitFunc.resolve(unlock);
    } else {
      isLock = false;
    }
  }
  if (isLock) {
    return new Promise((resolve, reject) => {
      lockList.push({ resolve, reject });
    });
  } else {
    isLock = true;
    return unlock;
  }
}
//使用
let unlock = await lock();

//xxxxxxxxxxxxxx

unlock();