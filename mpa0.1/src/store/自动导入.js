const files = import.meta.globEager('./modules/*.js')
const modules = {}
// NOTE: 将所有的模块都加载到modules对象中,尽量不要这样,影响tree-shaking
for (const file in files) {
  const name = file.match(/\/([^/]+)\.js$/)[1]
  modules[name] = files[file].default
}
export default modules
