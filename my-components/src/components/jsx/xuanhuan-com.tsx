import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const count = ref(12)
    const list = ref(Array.from({ length: 10 }, (_, ix) => ({
      name: '消息' + ix,
      key: 1000 + ix
    })))
    const remove = (code: number) => {
      count.value++
      console.log(count.value,code);
      list.value = list.value.filter(({ key }) => key !== code)
      console.log(list.value);

    }
    return () => {

      return (<>
        <h1>{count.value}</h1>
        <ul>
          {
          list.value.map(it => 
          <p>
            <span>{it.name}</span>
            <i onClick={() => remove(it.key)}>X</i>
          </p>)
          }
        </ul>
      </>)
    }
  }
})