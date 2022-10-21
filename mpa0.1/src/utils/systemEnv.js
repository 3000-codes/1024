import { encode } from 'js-base64'
import { debugNacosEnv, sysEnvName, projectName } from '@constants/index'
class SystemEnv {
  constructor (debugNacosEnv) {
    this.nacosEnv = debugNacosEnv
  }

  checkLoginStatus () {
    const token = localStorage.getItem('access_token')
    let doesTokenExist = token && token.length// token存在且长度大于0
    const isTopWindow = window.top === window// 是顶层窗口
    if (doesTokenExist) {
      if (isTopWindow) {
        const tokenExpireTime = localStorage.getItem('token_expire_time')
        const isTokenExpired = tokenExpireTime && tokenExpireTime < Date.now()
        if (isTokenExpired) {
          localStorage.removeItem('access_token')
          localStorage.removeItem('token_expire_time')
          doesTokenExist = false
        }
      }
    } else {
      const encodedUrl = encode(window.location.href)
      // TODO: 这里跳转到登录页面，需要传递当前页面的url
      console.log('encodedUrl', encodedUrl)
    }
  }

  setNacosEnv () {
    if (process.env.NODE_ENV === 'production') {
      try {
        const xhr = new XMLHttpRequest()
        xhr.open('GET', `http://172.18.28.51/${projectName}/nacos/getSystemEnv.public`, false)
        xhr.setRequestHeader('Content-Type', 'application/json;charset=utf-8') // 设置请求头
        xhr.setRequestHeader('Authorization', 'bearer ' + localStorage.getItem('access_token'))
        xhr.send() // 发送请求
        // 存储结果到指定的全局变量
        const result = JSON.parse(xhr.responseText)
        if (result.success) {
          const env = JSON.parse(result.message)
          const outerIpArr = env.outerKeywords ? (env.outerKeywords.length ? env.outerKeywords.split(',') : []) : []
          if (env.ipFromBrowser && outerIpArr.length) {
          // 看看当前ip是不是在匹配范围内，在指定的外部ip范围内就全部替换为外部网关地址
            let isOuterVisit = false
            outerIpArr.forEach((ip) => {
              if (window.location.href.includes(ip)) {
                isOuterVisit = true
              }
            })
            if (isOuterVisit) {
              console.warn('当前为外部地址访问，接口地址替换为外部网关')
              // 替换为外部ip端口
              for (const key in env) {
                if (key.startsWith('restUrl') || key.startsWith('uiUrl')) {
                // 替换为外网地址
                  env[key] = `http://${env.outerGateWay}:${env.outerPort}${env[key].substr(env[key].indexOf('/', 10))}`
                }
              }
            } else {
              console.warn('当前为非外部地址访问，接口地址采用默认网关')
            }
          }
          this.nacosEnv = env
        } else {
          console.error('接口失败，采用默认调试配置')
        }
      } catch (error) {
      // 因为本地文件打开或者其他情况访问不了的，就会这样，然后对应的地方拿不到值就用调试的默认值，不要把默认值写在这里！
        console.error('接口错误，采用默认调试配置')
        console.log(this.nacosEnv)
      }
    }
  }

  // 为访问的文件增加前缀
  setPrefix (url) {
    // if (url.indexOf("esri/css") > -1 || url.indexOf("api/libs/jsapi/") > -1) {
    //   //访问arcgis的js
    //   return this.nacosEnv.restUrl_agcimServer_arcgisApi + url;
    // }
    if (url.startsWith('/agcloud/framework')) {
      // 都指向sso，因为sso是必定存在的
      return this.nacosEnv.restUrl_opus_frontSSO + url
    }
    return url
  }
}
export default (() => {
  window[sysEnvName] = new SystemEnv(debugNacosEnv)
  window[sysEnvName].checkLoginStatus()
  window[sysEnvName].setNacosEnv()
  console.log(debugNacosEnv, sysEnvName)
})()
