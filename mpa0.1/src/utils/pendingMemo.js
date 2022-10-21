import axios from 'axios'
class PendingMemo {
  constructor () {
    this.pendingMap = new Map()
  }

  /**
 * 根据请求创建一个pendingKey
 */
  getPendingKey (config) {
    let { url, method, data, params } = config
    data = data instanceof FormData ? Object.fromEntries(data) : data
    if (typeof data === 'string') data = JSON.parse(data)
    return [url, method, JSON.stringify(data), JSON.stringify(params)].join('&')
  }

  /**
 * 添加请求pending和对应中断函数
 */
  addPending (config) {
    const key = this.getPendingKey(config)
    config.cancelToken = config.cancelToken || new axios.CancelToken(cancel => {
      if (!this.pendingMap.has(key)) this.pendingMap.set(key, cancel)
    }
    )
  }

  /**
 * 删除重复的请求
 */
  removePending (config) {
    const key = this.getPendingKey(config)
    if (this.pendingMap.has(key)) {
      this.pendingMap.get(key)(key)
      this.pendingMap.delete(key)
    }
  }
}

export default PendingMemo
