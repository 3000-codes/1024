type   PersonMap  = Record< string ,  string >;

let record: PersonMap = {
  1: "matt",
}

function returnFn(key:string) {
  return function(){
   return{ [key]:key}
  }
}

let fn = returnFn("1")

let result = fn()
console.log(result);
