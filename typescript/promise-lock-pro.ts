export {};
function test() {
  console.log("我免费了");
}
type UNFN=(...args:unknown[])=>unknown
type Callback={
  callback:UNFN,
  status:UNFN|null,
  queue?:Promise<unknown>
}
type LockedDic={
  [key :string]:Callback
}

function lockList() {
  let list:LockedDic = {};
  return function (fc:UNFN) {
    if (!list[fc.name]) {
      list[fc.name] = {
        callback : fc,
        status : null
      };

    }
    return {
      lock() {
        list[fc.name].queue = new Promise((res) => {
          list[fc.name].status = res;
        });
      },
      unlock(str:string) {
        list[str].status?.();
        list[str].status = null;
      },
      [fc.name]() {
        if (list[fc.name].status) {
          list[fc.name].queue!.then(list[fc.name].callback);
        } else {
          list[fc.name].callback();
        }
      },
    };
  };
}

let fn = lockList()(test);
fn.lock();
fn.test(void 0 as unknown as string);
fn.unlock(test.name);
