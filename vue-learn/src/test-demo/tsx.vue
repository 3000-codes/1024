<script lang="tsx">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TSx',
  setup () {
    return (...rest) => {
      console.log(rest)
      return (
      <div>
        <h1>tsx</h1>
      </div>
      )
    }
  }
})
</script>
