// {
//   "presets": ["@babel/env"]
// }

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["@babel/env"],
  };
}