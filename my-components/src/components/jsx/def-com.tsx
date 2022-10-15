import { defineComponent } from "vue";

export default defineComponent({
  data(){
    return{counter:100}
  },
  methods:{
    increace(){
      this.counter++
    }
  },
  render(){
    return <><input type="text" v-model={this.counter} /><button onClick={this.increace}>斤斤计较</button></>
  }
})