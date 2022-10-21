import axios from 'axios'
import { ElLoading } from 'element-plus'
import PendingMemo from './pendingMemo'
import httpErrorStatusHandle from './httpErrorStatusHandle'
import sysEnvName from '@constants/index'
const pendingTarget = new PendingMemo()// 用来存储每个请求的取消函数

const loadingInstance = {
  target: null,
  count: 0
}
/**
 * 关闭Loading层实例
 */
function closeLoading (options) {
  if (options.loading && loadingInstance.count > 0) loadingInstance.count--
  if (loadingInstance.count === 0) {
    loadingInstance.target.close()
    loadingInstance.target = null
  }
}
/**
 * @param {*} axiosConfig axios配置
 * @param {*} options 其他配置
 * @param {*} loadingOptions loading配置
 * @returns Promise<any>
 */

function createRequest (axiosConfig, options, loadingOptions) {
  const instance = axios.create({
    timeout: 30000,
    withCredentials: false, // 跨域请求时不携带cookie
    headers: {
      'Content-Type': 'application/json', // 后端接口传递参数也简单，直接丢在其data参数就行了
      Accept: 'application/json, text/plain, */*'
    }
  })

  options = Object.assign({
    CancelDuplicateRequest: true, // 是否开启取消重复请求, 默认为 true
    loading: false, // 是否开启loading层效果, 默认为false
    reductDataFormat: true, // 是否开启简洁的数据结构响应, 默认为true
    showErrorMessage: true, // 是否开启接口错误信息展示,默认为true
    showCodeMessage: true, // 是否开启code不为1时的信息提示, 默认为true
    showSuccessMessage: false // 是否开启code为1时的信息提示, 默认为false
  }, options)

  // 请求拦截器
  instance.interceptors.request.use(config => {
    config.url = handleUrlPrefix(config.url)
    pendingTarget.removePending(config)
    // 开启禁止重复请求
    options.CancelDuplicateRequest && pendingTarget.addPending(config)
    if (options.loading) {
      // 开启loading层效果
      loadingInstance.count++
      loadingInstance.count === 1 && (loadingInstance.target = ElLoading.service(loadingOptions))
    }
    if (!config.headers.Authorization) {
      const token = 'bearer ' + localStorage.getItem('access_token')
      config.headers.Authorization = token
    }
    return config
  }, Promise.reject)

  // 响应拦截器
  instance.interceptors.response.use(response => {
    // 请求成功,清除pending
    pendingTarget.removePending(response.config)
    // 关闭loading层
    options.loading && closeLoading(options)
    // TODO:根据options完善提示功能

    return response.status === 200 ? Promise.resolve(options.reductDataFormat ? response.data : response) : Promise.reject(response)
  }, error => {
    pendingTarget.removePending(error.config)
    // 关闭loading层
    options.loading && closeLoading(options)
    options.showErrorMessage && httpErrorStatusHandle(error)
    return Promise.reject(error)
  })

  return instance(axiosConfig)
}

/**
 * @param {string} url 请求地址
 * @returns {string} 处理后的请求地址
 */
function handleUrlPrefix (url) {
  if (!url.startsWith('http')) {
    // NOTE:后续调整rest地址
    url = window[sysEnvName].nacosEnv.restUrl_agcimResource_adminRest + url
  }
  return url.replaceAll('//', '/').replaceAll('http:/', 'http://').replaceAll('https:/', 'https://')
}
export default createRequest
