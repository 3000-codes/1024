import { ElNotification } from 'element-plus'
import axios from 'axios'
// TODO:将表单校验和取消确认的提示注入
export default function (error) {
  let message = ''
  if (axios.isCancel(error)) {
    // FIXME:此处需求区分是重复请求导致的取消，还是用户主动取消导致的取消
    message = '请求取消'
    console.error('请求取消', error.message)
  } else if (error.message.includes('timeout')) message = '请求超时'
  else if (error.message.includes('Network')) message = '网络错误'
  else if (error && error.response) {
    switch (error.response.status) {
      case 302:
        message = '请求被重定向'
        break
      case 400:
        message = '请求参数错误'
        break
      case 401:
        message = '未登录或登录已过期'
        break
      case 403:
        message = '您没有权限操作'
        break
      case 404:
        message = `请求地址出错: ${error.response.config.url}`
        break
      case 405:
        message = '请求方法出错'
        break
      case 408:
        message = '请求超时'
        break
      case 500:
        message = '服务器错误'
        break
      case 501:
        message = '服务未实现'
        break
      case 502:
        message = '网关错误'
        break
      case 503:
        message = '服务不可用'
        break
      case 504:
        message = '网关超时'
        break
      case 505:
        message = 'HTTP版本不受支持'
        break
      default:
        message = '异常问题，请联系管理员！'
    }
  } else message = '异常问题，请联系管理员！'
  ElNotification({
    type: 'error',
    message
  })
}
