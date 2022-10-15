import { defineComponent ,ref} from "vue";
const Child = defineComponent({
  setup(props, { slots }) {
    return () => (
      <>
        默认插槽: {slots.default && slots.default()}
        <br />
        具名插槽: {slots.prefix && slots.prefix()}
        <br />
        作用域插槽:{slots.suffix && slots.suffix({ name: "suffix" })}
      </>
    );
  },
});
export default defineComponent({
  setup() {
    return () => (
      <Child
        v-slots={{
          prefix: () => <i>prefix</i>, // 具名插槽
          suffix: (props: Record<"name", string>) => <span>{props.name}</span>, // props可作插槽作用域的作用
        }}
      >
        默认插槽内容
      </Child>
    );
  },
});