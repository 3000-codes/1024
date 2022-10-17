// import { onMounted } from "vue";
export default (props: any, ctx: any) => {
  // 函数组件无法使用生命周期
  // onMounted(() => {
  //   console.log('onMounted');

  // })
  // const emits = defineEmits(['send'])
  const send = () => ctx.emit('send', 123)
  return (<><div>{props.message}</div><button onClick={send}>send</button></>)
}