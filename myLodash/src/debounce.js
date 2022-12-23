import REAL_THIS from './realThis.js'
import isObject from './getType/isObject.js'
/**
 * 
 * @param {Function} func 需要防抖的函数
 * @param {Number} [wait=0] 防抖时间
 * @param {Object} [option={} ]
 * @return {Function} 防抖后的函数
 */
function debounce(func, wait, option) {
  let lastArgs,
    lastThis,
    maxWait,
    result,
    timerId,
    lastCallTime

  let lastInvokeTime = 0
  let leading = false
  let maxing = false
  let trailing = true

  const useRAF = !wait && wait !== 0 && typeof REAL_THIS.requestAnimationFrame === 'function'//判断是否可以使用requestAnimationFrame,设置延时为0

  if (typeof func !== 'function') {
    throw new TypeError('Expected a function')
  }
  wait = +wait || 0 //隐式转换?不需要判断是否为数字或者负数吗?

  if (isObject(option)) {
    leading = !!option.leading
    maxing = 'maxWait' in option
    maxWait = maxing ? Math.max(+option.maxWait || 0, wait) : maxWait //1.不需要判断是否为数字或者负数吗?2.数字或者undefined?
    trailing = 'trailing' in option ? !!option.trailing : trailing
  }

  //调用函数
  function invokeFunc(time) {
    const args = lastArgs
    const thisArg = lastThis

    lastArgs = lastThis = undefined
    lastInvokeTime = time
    result = func.apply(thisArg, args)
    return result
  }
}