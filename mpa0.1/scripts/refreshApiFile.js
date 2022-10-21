// NOTE:该脚本通过接口文档生成api文件(实验性),可能会覆盖你之前手写的,暂不建议使用
import axios from 'axios'
import { writeFile } from 'fs/promises'
const API_BASE_PATH = './scripts/api/'// 存放api文件的路径
const SWAGGER_URL = 'http://172.18.80.51/agcim-resource-admin-rest/v3/api-docs'// swagger文档地址
try {
  const res = await axios.get(SWAGGER_URL)// 获取swagger文档
  const { tags, paths } = res.data
  const schemas = res.data.components.schemas// 获取所有的schema
  const tagsMap = await createFiles(tags) // 创建api文件
  await injectPath(paths, tagsMap, schemas) // 注入接口
  // console.log(res.data)
} catch (error) {
  console.log(error, 'error')
}

async function createFiles (tags) {
  const map = {}
  for (let i = 0; i < tags.length; i++) {
    const API_NAME = tags[i].description.replace(/\s/g, '')
    map[tags[i].name] = API_NAME
    await writeFile(API_BASE_PATH + API_NAME + '.js', tags[i].description)
  }
  return map
}

async function injectPath (paths, tagsMap, schemas) {
  for (const path in paths) {
    const METHODS = Object.keys(paths[path])
    for (let i = 0; i < METHODS.length; i++) {
      const params = paths[path][METHODS[i]].parameters || []
      const summary = paths[path][METHODS[i]].summary || ''
      const template = await createTemplate({ method: METHODS[i], path, params, summary })
      // console.log(template)
      await writeFile(API_BASE_PATH + tagsMap[paths[path][METHODS[i]].tags[0]] + '.js', template)
    }
  }
}
async function createTemplate ({ method, path, params, summary }) {
  const JSDoc = createJSDoc(params, summary)
  return JSDoc
  // switch (method) {
  //   case 'get':
  //     return ''
  // }

  // return `
  // import { ${method} } from './api'
  // export const ${method} = ${method}
  // `
}

/**
 * @param {Array} params 参数数组
 * @param {string} summary 接口描述
 * @description 根据参数数组生成参数模板
 */
function createJSDoc (params, summary) {
  return `
/**
${params.map(param => {
    return `  * @param {${param?.schema?.type || '*'}} ${param.name} ${param.description}`
  }).join('\n')}
  * @description ${summary}
  */
`
}
