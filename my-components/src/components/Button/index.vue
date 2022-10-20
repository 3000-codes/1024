<script setup lang="ts">
import { computed } from 'vue'
const option = defineProps({
  size: {
    type: String,
    default: 'default'
  },
  type: {
    type: String,
    default: 'default'
  }
})

const typeClass = computed(() => {
  return 'my-button-' + option.type
})
</script>

<template>
  <button class="my-button" :class="typeClass">
    <slot />
  </button>
</template>

<style scoped lang="less">
.my-button {
  line-height: 1.499;
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  box-shadow: 0 2px 0 rgba(0, 0, 0, .015);
  cursor: pointer;
  transition: all .3s cubic-bezier(0.645, 0.045, 0.355, 1);
  user-select: none;
  touch-action: manipulation;
  border: 1px solid #ddd;
  color: #000;
  text-align: center;
  outline: none;
  font-size: 14px;
  border-radius: 4px;
  padding: 10px 20px;

  &:focus {
    outline: none;
  }

  &.my-button-default {
    
  }
}

/* button big 的样式 */
.my-button.my-button-size-big {
  padding: 12px 20px;
}

/* button small 的样式 */
.my-button.my-button-size-small {
  padding: 10px 10px;
}
</style>
