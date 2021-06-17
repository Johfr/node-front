import { createApp } from 'vue'
// import Vue from 'vue'
// import App from '../App.vue'
import { getDatas } from './getDatas.js';

const services = {
  getDatas,
}

// const app = createApp(App)

// app.config.globalProperties.$services = services
const app = createApp({
  myOption: services,
  // created() {
  //   console.log(this.$options.myOption) // => 'foo'
  // }
}).mount('#app')
// console.log(app)
// app.mixin({
//   created() {
//     const myOption = this.$options.myOption
//     console.log('myOption', this.$options.myOption)
//     if (myOption) {
//       console.log(myOption)
//     }
//   }
// })

// app.mount('#app')
export default app
// console.log('$createApp', app.config.globalProperties.$services)