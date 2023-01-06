import { customRef } from 'vue'
export function reduxRef<T> (store: any, key: string) {
  return customRef<T>((track, trigger) => {
    return {
      get () {
        track()
        return store.getState()[key]
      },
      set (value) {
        store.dispatch(value)
        trigger()
      }
    }
  })
}
