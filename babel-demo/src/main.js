import {transformFromAst} from '@babel/core';
import * as Parser from '@babel/parser';// 解析成AST
import traverse from '@babel/traverse';// 遍历AST
import types from '@babel/types';// 用于判断节点类型
import generate from '@babel/generator';// 将AST转换成代码
import template from '@babel/template';// 让你编写字符串形式且带有占位符的代码来代替手动编码
import myPlugin from './babel_plugin.js';
const code = `
// 注释
function square(n) {
  'aaa'=='bbb';
  return n * n;
}`;
const ast = Parser.parse(code,{
  // sourceType: "module", // default: "script"
  // plugins: ["jsx"] // default: []
});

traverse.default(ast, {
  enter(path) {
    // if (
    //   path.node.type === "Identifier" &&
    //   path.node.name === "n"
    // ) {
    //   console.log(path.node.name);
    //   path.node.name = "x";
    // }

    if (types.isIdentifier(path.node, { name: "n" })) {
      // console.log(path.node.name);
      path.node.name = "x";
    }
  }
});

const res= generate.default(ast, {}, code);
// console.log(res.code);

const buildRequire = template.default(`
  var IMPORT_NAME = require(SOURCE);
`);

const asts = buildRequire({
  IMPORT_NAME: types.identifier("myModule"),
  SOURCE: types.stringLiteral("my-module")
});

// console.log(generate.default(asts).code);

const res2=transformFromAst(ast,null,{
  plugins: [myPlugin]})
console.log(res2.code);
