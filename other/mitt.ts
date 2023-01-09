function miit(all:Map<string,Function[]>) {
  all = all || new Map(); //创建事件处理中心
  return {
    all,
    on(type:string, hanlder:Function) {
      const hanlders = all.get(type); //获取当前类型所有的处理函数
      if (hanlders) {
        //有则追加,无则创建
        hanlders.push(hanlder);
      } else {
        all.set(type, [hanlder]);
      }
    },
    off(type:string, hanlder:Function) {
      const hanlders = all.get(type);
      if (hanlders) {
        if (hanlder) {
          //有则关闭一个,无则关闭所有
          hanlders.splice(hanlders.indexOf(hanlder), 1);
        } else {
          all.set(type, []);
        }
      }
    },
    emit(type:string, args:unknown) {
      //通知类型的所有事件并传递参数
      (all.get(type) || []).forEach((handler) => {
        handler(args);
      });
      (all.get("*") || []).forEach((handler) => {
        handler(type, args);
      });
    },
  };
}
