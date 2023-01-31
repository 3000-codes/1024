export default function(babel) {
  const { types: t } = babel;
  return {
    name: "plugin-name", // not required
    visitor: {
      // 中的每个函数接收2个参数：path 和 state
      Identifier(path,state) {
        // console.log(path.node.name,state.opts);
      },
      BinaryExpression(path,state) {
        // if (path.node.operator !== "===") {
        //   return;
        // }
        // path.node.left = t.identifier("sebmck");
        // path.node.right = t.identifier("dork");
          if (path.node.operator === "==") {
            path.node.operator="===";
        }
      },
      FunctionDeclaration(path,state) {
        // (path.node.leadingComments=[{
        //   type:"CommentBlock",
        //   value:"这是一个函数"
        // }])
        path.node.leadingComments=''
      }
    },
    pre:function(){
      console.log("pre");
    },
    post:function(){
      console.log("post");
    },
    // inherits: require("babel-plugin-syntax-jsx"),
    manipulateOptions(opts, parserOpts) {
      parserOpts.plugins.push("jsx");
    }

  };
}