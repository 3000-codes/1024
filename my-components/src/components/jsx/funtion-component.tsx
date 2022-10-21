import { watch, ref } from "vue";
export default (props: any, ctx: any) => {
  // 函数组件无法使用生命周期,方法,必须通过外部去修改状态
  // 它们很像纯函数：接收 props，返回 vnodes。
  // onMounted(() => {
  //   console.log('onMounted');
  // })
  const count = ref(1)
  const send = () => ctx.emit('send', 123)
  const add = () => {
    count.value++
    console.log(count.value);
  }
  return (
    <>
      <p>{count.value}</p>
      <div>{props.message}</div>
      <button onClick={send}>send</button>
      <button onClick={add}>add</button>
    </>
  )
}