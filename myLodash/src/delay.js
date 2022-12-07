function delay(func, wait, ...args) {

  if (typeof func !== 'function') {
    throw new TypeError('Expected a function');
  }

  return setTimeout(func, wait, ...args);
}

export default delay;