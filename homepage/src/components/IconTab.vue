<script lang="tsx">
import { defineComponent } from 'vue'
export default defineComponent({
  setup (props, { slots }) {
    return () => (
      <div class="icon-tab">
        <div class="icon-tab__icon">{slots.icon?.()}</div>
        <div class="icon-tab__text">{slots.default?.()}</div>
      </div>
    )
  }
})
</script>
<style lang="scss" scoped>
</style>
