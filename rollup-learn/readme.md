命令行
```shell
npx rollup 入口文件 --format 输出格式 --file 输出文件
npx rollup ./src/index.js --format iife --file ./dist/bundle.js

npx rollup 入口文件 --format 输出格式 --dir 输出路径
npx rollup ./src/index.js --format iife --dir ./dist

```

配置文件rollup.config.js
```js
export default {
  input:'./src/index.js',
  output:{
    file:'./dist/bundle.js',
    format:'iife' 
  }
}
```

默认不会读取配置文件
```shell
npx rollup --config
```