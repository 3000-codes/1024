<script lang="jsx">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup () {
    const msg = ref('Hello World')
    return () => (
      <div>
        <h1>{msg.value}</h1>
        <button onClick={() => { msg.value = 'Hello Vue' }}>
          Change Message
        </button>
      </div>
    )
  }
})
</script>
