(() => {
  const fn = () => Promise.reject('error')
  const fn2 = () => Promise.resolve(['error'])

  async function test () {
    console.time('test fn')
    for (let index = 0; index < 100000; index++) {
      try {
        await fn()
      } catch (e) {
        // console.log('catch error', e)
      }
    }
    console.timeEnd('test fn')

    console.time('test fn2')
    for (let index = 0; index < 100000; index++) {
      const [err] = await fn2()
      if (err) {
        // console.log('catch error', err)
      }
    }
    console.timeEnd('test fn2')
  }
  test()
})()
