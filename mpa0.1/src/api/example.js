import createRequest from '@utils/request'

export default class Example {
  constructor (controllerUrl) {
    this.controllerUrl = controllerUrl
    this.actionUrls = new Map([
      ['get', controllerUrl + 'get'],
      ['add', controllerUrl + 'add'],
      ['update', controllerUrl + 'update'],
      ['delete', controllerUrl + 'delete']
    ])
  }

  // get (params) {
  //   return createRequest.get(this.actionUrls.get('get'), { params })
  // }
  get (params) {
    return createRequest({
      url: this.actionUrls.get('get'),
      method: 'get',
      params
    })
  }

  add (data) {
    return createRequest({
      url: this.actionUrls.get('add'),
      method: 'post',
      data
    }, {
      showErrorMessage: true,
      loading: true
    }, {
      fullScreen: true
    })
  }
}
