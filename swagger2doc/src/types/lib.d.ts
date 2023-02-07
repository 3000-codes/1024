type User={
  id:number,
  name:string,
  [key:string]:unknown
}

interface List<U>{
  total:number,
  szie:number,
  list:U[],
  [key:string]:unknown
}

interface ContentResultForm<T,U=void>{
  content:T extends string?string:List<U>,
  message:string,
  success:boolean,
}