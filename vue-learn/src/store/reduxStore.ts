import { createStore } from 'redux'
type ActionType = 'INCREMENT' | 'DECREMENT'
type CounterAction = {
  type:ActionType,
  payload: number
}
const actionTypes: ActionType[] = ['INCREMENT', 'DECREMENT']
type Action ={
  // eslint-disable-next-line no-unused-vars
  [key in ActionType]: {
    value: number
  }
}
function counterReducer (state = { value: 18 }, action: CounterAction) {
  console.log('dispatched', action)
  const actions:Action = {
    INCREMENT: { value: state.value + action.payload },
    DECREMENT: { value: state.value - action.payload }
  }
  if (actionTypes.includes(action.type) || action.type.startsWith('@@redux')) {
    return actions[action.type] || state
  } else {
    throw new Error('action type error')
  }
}
// 创建一个包含应用程序 state 的 Redux store。
// 它的 API 有 { subscribe, dispatch, getState }.
const store = createStore(counterReducer)
export type { CounterAction }
export default store
