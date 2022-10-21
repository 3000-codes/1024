import defaultImg from '../assets/vue.svg'
// TODO:防抖,图片懒加载,单击复制,权限,转换时间格式
const debounce = {
  inserted: function (el, binding) {
    let timer
    el.addEventListener('keyup', () => {
      if (timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        binding.value()
      }, 1000)
    })
  }
}

const lazy = {
  // Vue2.0用inserted监听DOM是否创建完毕
  // Vue3.0中用mounted
  mounted (el, binding) {
    // 观察当前元素
    const observer = new IntersectionObserver(([{ isIntersecting }]) => {
      if (isIntersecting) {
        // v-for生成的多组纵列图片只进行一次观察：停止观察
        observer.unobserve(el)
        // 若图片加载失败，使用该默认图片
        el.onerror = () => {
          el.src = defaultImg
        }
        // 组件使用指令传来的值进行操作，赋值于src
        el.src = binding.value
      }
    }, {
      // 进入区域立即观察，一个选项而已
      threshold: 0
    })
    // 挂载元素。只进行一次观察：开始观察
    observer.observe(el)
  }
}

export default {
  debounce, lazy
}
// https://www.cnblogs.com/5idabaicai/p/16479008.html
// https://www.modb.pro/db/326850
