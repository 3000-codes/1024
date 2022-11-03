import { readFile } from 'node:fs/promises';
import path,{ resolve } from 'node:path'
import ejs from 'ejs'
// import { fileURLToPath } from "node:url"

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(fileURLToPath(import.meta.url));

// console.log(import.meta.url);
// console.log(__filename);
// console.log(__dirname);


// try {
  const filePath=resolve('./src/template/index.ejs')
//  const template=await readFile(filePath,{encoding:'utf-8'})
//  const html= ejs.render(template,{title:'大家好',entry:123})
 const html=await ejs.renderFile(filePath,{title:'大家好',entry:123})

  console.log(html);
// } catch (error) {
  
// }