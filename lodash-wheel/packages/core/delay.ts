function delay(func: Function, wait: number, ...args: unknown[]): number {
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function');
  }
  return setTimeout(func, wait, ...args);
}

export default delay;