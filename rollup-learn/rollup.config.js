export default {
  input:'./src/index.js',//入口,可以是多个(数组)
  output:{
    file:'./dist/bundle.js',
    format:'iife' //iife,amd,cjs
  }
}