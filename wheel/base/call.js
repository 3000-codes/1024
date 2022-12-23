//call:fn.call(_this, ...args)
//apply:fn.apply(_this, args[])
//bind:fn.bind(_this, ...args)(...args)


exports.call = function (ctx, ...args) {
  ctx.fn = ctx.fn || this;
  const result = ctx.fn(...args);
  delete ctx.fn;
  return result;
}

exports.apply = function (ctx, args) {
  ctx.fn = ctx.fn || this;
  args = args || [];
  const result = ctx.fn(...args);
  delete ctx.fn;
  return result;
}

exports.bind = function (ctx, ...args) {
  ctx.fn = ctx.fn || this;
  return function (...args2) {
    const result = ctx.fn(...args, ...args2);
    delete ctx.fn;
    return result;
  }
}