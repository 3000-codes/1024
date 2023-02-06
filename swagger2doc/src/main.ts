import axios from 'axios';
type List<U>={
  total:number,
  szie:number,
  list:U[],
  [key:string]:unknown
}
type ContentResultForm<T,U=void>={
  content:T extends string?string:List<U>,
  message:string,
  success:boolean,
}
const swagger2doc = async (url: string) => {
  const  data   =  (await axios.get(url)).data as ContentResultForm<string>;
  console.dir(data);
};

swagger2doc('http://172.18.80.51/agcim-exchange-admin/v3/api-docs');