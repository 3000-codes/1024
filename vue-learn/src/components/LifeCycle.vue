<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'LifeCycle',
  data () {
    return {
      msg: 'hello world',
      show: true
    }
  },
  expose: ['changeMsg'],
  methods: {
    changeMsg () {
      this.msg = 'hello vue3'
      console.log(this.msg)
    }
  },
  beforeUpdate () {
    console.log('beforeUpdate')
  },
  updated () {
    console.log('updated')
  }

})
</script>
<template>
  <h2>{{ msg }}</h2>
  <button @click="changeMsg">
    change msg
  </button>
  <button @click="show=!show">
    show
  </button>
  <p :style="{color:show?'red':'green'}">
    asfsdgfdfgfghdfghdfgfdgh
  </p>
</template>
