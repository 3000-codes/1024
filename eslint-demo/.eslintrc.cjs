module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: ["standard-with-typescript", "prettier"],
    overrides: [],
    parserOptions: {
        project: ["./eslint-demo/tsconfig.json"],
        ecmaVersion: "latest",
        sourceType: "module",
    },
    rules: {
        // 双引号
        quotes: ["error", "double"],
        // 末尾分号
        semi: ["error", "always"],
    },
};
