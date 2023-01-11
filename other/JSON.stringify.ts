const b = JSON.stringify({
  a: undefined,// 跳过
  b: null,
  c: Symbol(),// 跳过
  d() {},// 跳过
  e: 0,
  f: NaN,// =>null
  g: [],
  h: {},
  i: Infinity,// =>null
  // j:18n,// throw a TypeError:Do not know how to serialize a BigInt
  k: false,
  date: new Date(),
  set: new Set([1, 2, 3]),// =>{}
  map: new Map([['a', 1], ['b', 2]]),// =>{}
});

let a=Object.create(null,{
  a:{value:1,enumerable:true},
  b:{value:2,enumerable:false},
  [Symbol('c')]:{value:3,enumerable:true},
  [Symbol.for('d')]:{value:4,enumerable:true},
  [Symbol.for('e')]:{value:5,enumerable:false},
});
for(let key of [...Object.getOwnPropertySymbols(a),...Object.getOwnPropertyNames(a)]){
  console.log(key,a[key]);
}
enum PrimaryType {
  String = "String",
  Number = "Number",
  Boolean = "Boolean",
  Bigint = "Bigint",
  Symbol = "Symbol",
  Undefined = "Undefined",
  Null = "Null",
}
function getDataType(data: unknown) {
  return Object.prototype.toString.call(data).slice(8, -1);
}
function isPrimaryType(data: unknown) {
  return Object.values(PrimaryType).includes(getDataType(data) as PrimaryType);
}

function cloneDeep<T>(obj: T, depth = 5): T|{} {
  if (depth < 0) {
    return isPrimaryType(obj) ? obj : {};
  }
  if (isPrimaryType(obj) || obj instanceof Function) {
    return obj;
  }
  if (obj instanceof Date) {
    return new Date(obj);
  }
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }
  if (obj instanceof Set) {
    const set = new Set();
    for (const item of obj) {
      set.add(cloneDeep(item, depth - 1));
    }
    return set;
  }
  if (obj instanceof Map) {
    const map = new Map();
    for (const [key, value] of obj) {
      map.set(cloneDeep(key, depth - 1), cloneDeep(value, depth - 1));
    }
    return map;
  }
  if (obj instanceof Array) {
    return obj.map((item) => cloneDeep(item, depth - 1));
  }


  if(obj instanceof Object){
    const result:{}={};
    for(const key of [...Object.getOwnPropertySymbols(obj),...Object.getOwnPropertyNames(obj)]){
      result[key]=cloneDeep(obj[key],depth-1);
    }
    return result;
  }
  return {};
}

(cloneDeep(console.log) as Function )(123)
