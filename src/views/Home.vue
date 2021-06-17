<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Dashboard msg="Welcome to Your Vue.js App" :datas='datas' :uid='uid' />
  </div>
</template>

<script>
import Dashboard from '@/components/Dashboard.vue'
import { getDatas } from '../services/getDatas.js';

export default {
  name: 'Home',
  components: {
    Dashboard
  },
  data() {
    return {
      datas: null,
      uid: null
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    async getData() {
      try {
        const datas = await getDatas()
        this.datas = datas.data
        // // get UID
        // let userId = null
        // this.datas.forEach(data => {
        //   userId = data.userId
        // });
        // const userIdStored = sessionStorage.getItem('UID')

        //   console.log('ok userId', userId)
        //   console.log('ok userIdStored', userIdStored)
        // if (userIdStored === userId) {
        //   this.uid = userId
        // }
      } catch (error) {
        throw new Error(error.message);
      }
    },
  }
}
</script>
