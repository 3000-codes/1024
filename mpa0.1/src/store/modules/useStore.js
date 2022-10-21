import { defineStore } from 'pinia'
export default defineStore('main', {
  state: () => ({
    counter: 0
  }),
  getters: {
    // 自动将返回类型推断为数字
    doubleCount (state) {
      return state.counter * 2
    },
    // 返回类型必须明确设置
    doublePlusOne () {
      return this.counter * 2 + 1
    }
  },
  actions: {
    increment () {
      this.counter++
    },
    randomizeCounter () {
      this.counter = Math.round(100 * Math.random())
    }
  }
})

// export const useStore2 = defineStore('main', {
//   state: () => ({
//     counter: 0
//   }),
//   getters: {
//     // 自动将返回类型推断为数字
//     doubleCount (state) {
//       return state.counter * 2
//     },
//     // 返回类型必须明确设置
//     doublePlusOne () {
//       return this.counter * 2 + 1
//     }
//   },
//   actions: {
//     increment () {
//       this.counter++
//     },
//     randomizeCounter () {
//       this.counter = Math.round(100 * Math.random())
//     }
//   }
// })
