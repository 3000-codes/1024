/* eslint-disable no-undef */
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

;(function (global, factory) {
  // typeof exports === 'object' && typeof module !== 'undefined'
  //   ? module.exports = factory()
  //   : typeof define === 'function' && define.amd
  //     ? define(factory)
  //     : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.a = factory())
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = factory()
  } else if (typeof define === 'function' && define.amd) {
    define(factory)
  } else {
    global = typeof globalThis !== 'undefined' ? globalThis : global || self
    global.a = factory()
  }
})(this, function () {})
