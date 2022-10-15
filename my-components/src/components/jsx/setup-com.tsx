import { defineComponent ,ref} from "vue";

export default defineComponent({
  setup(){
    const counter=ref<Number>(12)
    return()=>(<>
    <h2>setup-jsx</h2>
    <input type="text" v-model={counter.value} />
    </>)
  }
})