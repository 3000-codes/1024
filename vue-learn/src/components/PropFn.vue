<template>
  <div>
    <h1>PropFn</h1>
    <p>{{ msg }}</p>
    <button @click="changeMsg">
      changeMsg
    </button>
  </div>
</template>
<script setup lang="ts">
import { defineProps, PropType } from 'vue'
defineProps({
  msg: {
    type: String,
    default: 'default msg'
  },
  changeMsg: {
    type: Function as PropType<(e:MouseEvent) => void>,
    default (e:MouseEvent) { },
    required: true
  }
})
</script>
