function miit(all) {
  all = all || new Map()//创建事件处理中心
  return {
    all,
    on(type, hanlder) {
      const hanlders = all.get(type)//获取当前类型所有的处理函数
      if (hanlders) {//有则追加,无则创建
        hanlders.push(hanlder)
      } else {
        all.set(type, [hanlder])
      }
    }
    ,
    off(type, hanlder) {
      const hanlders = all.get(type)
      if (hanlders) {
        if (hanlder) {//有则关闭一个,无则关闭所有
          hanlders.splice(hanlders.indexOf(hanlder), 1)
        } else {
          all.set(type, [])
        }
      }
    },
    emit(type, args) {//通知类型的所有事件并传递参数
      let hanlders = all.get(type)
      if (hanlders) {
        hanlders.forEach(hanlder => hanlder(args))
      }
      // NOTE:下面的没有任何用
      handlers =  all.get('*')
      if (hanlders) {
        hanlders.forEach(hanlder => hanlder(args))
      }
    }
  }
}