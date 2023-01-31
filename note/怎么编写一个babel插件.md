# 怎么编写一个babel插件(基于babel7)

## 准备工作

全局安装插件模板生成器(项目中安装(生产依赖)将被后续的插件模板生成器覆盖)
```sh
$ npm i -g yo
$ npm i -g generator-babel-plugin
```

初始化插件
```sh
$ mkdir babel-plugin-test # babel-plugin-开头,否则会报错
$ cd babel-plugin-test 
$ yo babel-plugin
```

运行最后一步的命令后可能因为操作系统的不同无法使用rm命令,可以手动删除`test`文件夹或者修改`package.json`中的`scripts`的`clean`命令
```json
"clean": "rm -rf lib" # 原命令(linux)
"clean": "rmdir /s/q lib" # 修改后的命令(windows)
```
### 生成的文件结构
```sh
```



### 几个常用的babel插件开发工具

+ `@babel/core` babel的核心库: 用于解析代码,生成AST,遍历AST,替换节点,生成代码
+ `@babel/cli` babel的命令行工具: 用于编译文件,编译目录,编译标准输入
+ `@babel/generator` 
+ `@babel/parser` 解析代码(支持新的ECMAScript语法,JSX,Flow,TypeScript,JSDoc,实验性的语法等)

### babel-cli的使用

```sh
$ babel my-file.js # 编译文件并在终端输出

# 使用 --out-file 或着 -o 可以将结果写入到指定的文件。如果目标文件已经存在，那么它将被覆盖。
$ babel my-file.js --out-file compiled.js

# 使用 --out-dir 或者 -d 可以将结果写入到一个目录中。如果目标目录不存在，那么它将被创建。
$ babel src --out-dir lib


```


## 编写插件

### 插件的基本结构

```js
module.exports = function(babel) {
  const {types: t } = babel;// 用于创建AST节点
  return {
    visitor: {
      // 用于遍历AST节点
      Identifier(path) {
        // 将log替换为x: console.log() => console.x()
        if (path.node.name === "log") {
          path.node.name = "x";
        }
      },

    }
  };
};
```