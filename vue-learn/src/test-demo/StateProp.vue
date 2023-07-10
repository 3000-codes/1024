<template>
  <div>
    <h1>StateProp</h1>
    <p>{{ num.val }}</p>
    <button @click="increment">
      increment
    </button>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    count: {
      type: Object,
      default: () => ({ val: 0 })
    }
  },
  data () {
    return {
      num: this.count
    }
  },
  methods: {
    increment () {
      this.num.val++
    }
  }
})
</script>
