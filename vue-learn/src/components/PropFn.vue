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
import { defineProps, PropType, withDefaults } from 'vue'
type Person = {
  name: string;
  age: number;
};
// defineProps({
//   msg: {
//     type: String,
//     default: 'default msg'
//   },
//   changeMsg: {
//     type: Function as PropType<(e:MouseEvent) => void>,
//     default (e:MouseEvent) { },
//     required: true
//   },
//   personList: {
//     type: Array as PropType<Person[]>,
//     default: () => []
//   }
// })

withDefaults(defineProps<{
  msg: string;
  changeMsg:(e: MouseEvent) => void;
  personList: PropType<Person[]>;
}>(), {
  msg: 'default msg',
  changeMsg: (e: MouseEvent) => {},
  personList: () => []
})
</script>
