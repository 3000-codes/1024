describe('测试call,apply,bind', () => {
  const { call, apply, bind } = require('../call.js');
  Function.prototype.call = call;
  Function.prototype.apply = apply;
  Function.prototype.bind = bind;
  it('测试call', () => {
    const obj = {
      name: 'obj',
    };
    function fn() {
      return this.name;
    }
    expect(fn.call(obj)).toBe('obj');
  });
  it('测试apply', () => {
    const obj = {
      name: 'obj',
    };
    function fn() {
      return this.name;
    }
    expect(fn.apply(obj)).toBe('obj');
  });

  it('测试bind', () => {
    const obj = {
      name: 'obj',
    };
    function fn(pre) {
      return pre + this.name;
    }
    expect(fn.bind(obj)('re')).toBe('reobj');
  });
});
