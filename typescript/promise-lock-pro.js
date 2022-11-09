// export{}
function test() {
  console.log('我免费了');
}

// type func=(...rest:unknown[])=>unknown


function lockList() {
  let list = {}
  return function (fc) {
    if (!list[fc.name]) {
      list[fc.name] = {}
      list[fc.name].callback = fc
      list[fc.name].status = null
    }
    return {
      lock() {
        list[fc.name].queue = new Promise(res => {
          list[fc.name].status = res
        })
      },
      unlock(str) {
        list[str].status()
        list[str].status = null
      },
      [fc.name]() {
        if (list[fc.name].status) {
          list[fc.name].queue.then(list[fc.name].callback)
        } else {
          list[fc.name].callback()
        }
      },
    }
  }
}

let fn = lockList()(test)
fn.lock(test)
fn.test()
fn.unlock(test.name)