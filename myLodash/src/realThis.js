//node.js中的this(全局对象)是global

const NODE_THIS=typeof global==='object'&&global!==null&&global.Object===Object&&global;

//新特性：globalThis

const GLOBAL_THIS=typeof globalThis==='object'&&globalThis!==null&&globalThis.Object===Object&&globalThis;

// window中的this是window(self),web worker中的this是self

const WINDOW_THIS=typeof self==='object'&&self!==null&&self.Object===Object&&self;

// 全局对象的Function构造函数返回this必然是全局对象

const FUNCTION_THIS=Function('return this')();

const REAL_THIS=NODE_THIS||GLOBAL_THIS||WINDOW_THIS||FUNCTION_THIS;

export default REAL_THIS;