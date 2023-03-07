import { Component } from 'vue'
// import helloWorld from './HelloWorld.vue'
// import lifeCycle from './LifeCycle.vue'
// import propFn from './PropFn.vue'
// import { HelloWorldProps } from './HelloWorld'

// export interface ComponentInstall {
//   install: (app: App) => void
// }

// export interface ComponentInstallWithProps {
//   install: (app: App, props: HelloWorldProps) => void
// }

// function install (com:Component) {
//   const name = com.name
//   return {
//     install (app:App) {
//       app.component(name!, com)
//     }
//   }
// }

// export const HelloWorld = install(helloWorld)
// export const LifeCycle = install(lifeCycle)
// export const PropFn = install(propFn)

// export { default as HelloWorld } from './HelloWorld.vue'
// export { default as LifeCycle } from './LifeCycle.vue'
// export { default as PropFn } from './PropFn.vue'

import HelloWorld from './HelloWorld.vue'
import LifeCycle from './LifeCycle.vue'
import PropFn from './PropFn.vue'

const components:{
  [key:string]:Component
} = {
  HelloWorld,
  LifeCycle,
  PropFn
}

export default components
