// eslint-disable-next-line no-var, no-unused-vars
var a = 1
;(function IIFE () {
  console.log('Hello!')
})()

;(function IIFE () {
  console.log('Hello,我是一个变体!')
}())

;(function IIFE (global) {
  const a = 10
  console.log(a)
  console.log(global.a)
})(window)

;(function IIFE (def) {
  def(window)
})(function def (global) {
  const a = 20
  console.log(a)
  console.log(global.a)
})

;(function IIFE (def, global) {
  def(global)
})(function def (global) {
  const a = 30
  console.log(a)
  console.log(global.a)
}, window)
