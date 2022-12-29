(() => {
  document.addEventListener('click', (e) => {
    const { clientX, clientY } = e
    console.log('click', clientY, clientX)
  })

  const clickEvent = document.createEvent('MouseEvents')
  clickEvent.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
  // clickEvent.initEvent('click', true, true)
  document.dispatchEvent(clickEvent)
})()
