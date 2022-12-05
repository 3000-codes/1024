<script lang="tsx">
import { defineComponent } from 'vue'
import IconTab from '@/components/IconTab.vue'
import '../../assets/font/iconfont.css'
import config from './config'
export default defineComponent({
  setup (props) {
    const slots = {
      default: () => <div>默认插槽</div>,
      icon: () => <div>图标插槽</div>
    }
    return () => {
      return (config.map((item) =>{
        return (<IconTab v-slots={slots}>
        </IconTab>) 
        } )

      )
    }
  }
})
</script>
