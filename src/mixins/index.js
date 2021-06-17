import { createApp } from 'vue'
  // import Vue from 'vue'
  // import App from '../App.vue'
  import { getDatas } from '../services/getDatas';

  const services = {
    getDatas,
  }

  // const app = createApp(App)

  // app.config.globalProperties.$services = services
  const app = createApp({
    $services: services
  })
  app.mixin({
    created() {
      const $services = this.$options.$services
      if ($services) {
        console.log($services)
      }
    }
  })

  // app.mount('#app')

  export default {
    app
  }
// console.log('$app', app)
// console.log('$createApp', app.config.globalProperties.$services)