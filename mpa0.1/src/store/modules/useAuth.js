import { defineStore } from 'pinia'
import { reactive } from 'vue'
export default defineStore('auth', () => {
  const state = reactive({
    token: '',
    role: ''
  })
  const setState = (newState) => {
    Object.assign(state, newState)
  }
  return {
    state,
    setState
  }
}, {
  presist: {
    key: 'auth'// 持久化的键值
  }
})
