
const arr = ["a", "b", ["a", "b", ["a", "b"]]];
// console.log(arr.toString()); // a,b,a,b,a,b
type ToStringL=(arr:unknown[],res?:string)=>string
const myToString:ToStringL = (arr, res = "") => {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let item = arr[i];
    if (Array.isArray(item)) {
      res = myToString(item, res);
    } else {
      res += item + ",";
    }
  }
  return res;
};
// console.log(myToString(arr)); 

console.time("toString");
for (let i = 0; i < 1000000; i++) {
  arr.toString();
}
console.timeEnd("toString"); // 589.393ms

console.time("myToString");
for (let i = 0; i < 1000000; i++) {
  myToString(arr);
}
console.timeEnd("myToString"); // 125.196ms