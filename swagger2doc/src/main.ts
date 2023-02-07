import axios from 'axios';

const swagger2doc = async (url: string) => {
  const  data   =  (await axios.get(url)).data as ContentResultForm<string,User>;
  console.dir(data);
};

swagger2doc('http://172.18.80.51/agcim-exchange-admin/v3/api-docs');