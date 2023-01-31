# [怎么编写一个babel插件](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md)

### AST(abstact syntax tree)的基本结构

每个树节点结构都类似
```js
{
  type:"Identifier",// 节点类型: Identifier,Literal,ExpressionStatement,BlockStatement,FunctionDeclaration等
  start:0,// 节点在源代码中的起始位置
  end:3,// 节点在源代码中的结束位置
  loc:{// 节点在源代码中的位置信息
    start:{line:1,column:0},// 节点在源代码中的起始位置
    end:{line:1,column:3}// 节点在源代码中的结束位置
  },
  name:'foo',// 节点的值
  ...
}

```

### babel处理流程
Babel 的三个主要处理步骤分别是： 解析（parse），转换（transform），生成（generate）。
#### 解析
```js
n*n
```
将被转换成
```js
[
  { type: { ... }, value: "n", start: 0, end: 1, loc: { ... } },
  { type: { ... }, value: "*", start: 2, end: 3, loc: { ... } },
  { type: { ... }, value: "n", start: 4, end: 5, loc: { ... } },
  ...
]
```
#### 转换
转换步骤接收 AST 并对其进行遍历，在此过程中对节点进行添加、更新及移除等操作。 这是 Babel 或是其他编译器中最复杂的过程 同时也是插件将要介入工作的部分，这将是本手册的主要内容， 因此让我们慢慢来。

#### 生成
代码生成步骤把最终（经过一系列转换之后）的 AST 转换成字符串形式的代码，同时还会创建源码映射（source maps）。.

代码生成其实很简单：深度优先遍历整个 AST，然后构建可以表示转换后代码的字符串。

## 遍历(递龟)

### Visitors（访问者）

当我们谈及“进入”一个节点，实际上是说我们在访问它们
```js
const MyVisitor = {
  Identifier() {
    console.log("Called!");
  }
};

// 你也可以先创建一个访问者对象，并在稍后给它添加方法。
let visitor = {};
visitor.MemberExpression = function() {};
visitor.FunctionDeclaration = function() {}
```

  Identifier() { ... } 是 Identifier: { enter() { ... } } 的简写形式。还包含另一个方法：exit()，它在离开节点时被调用。

+ 如有必要，你还可以把方法名用|分割成Idenfifier |MemberExpression形式的字符串，把同一个函数应用到多种访问节点。
+ Function is an alias for FunctionDeclaration, FunctionExpression, ArrowFunctionExpression, ObjectMethod and ClassMethod.
```js
const MyVisitor = {
  Function(path) {}
};
```