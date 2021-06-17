<template>
  <div class="view-article">
    <h1>Login</h1>
    <section class="view-article_section">
      <div class="form-section">
        <SignupForm />
        <LoginForm />
      </div>
    </section>
  </div>
</template>

<script>
// import { requestAPI } from '../services/api.js';
import LoginForm from '@/components/Molecule/LoginForm.vue'
import SignupForm from '@/components/Molecule/SignupForm.vue'

export default {
  name: 'Article',
  components: {
    SignupForm,
    LoginForm
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {}
}
</script>

<style lang="scss" scoped>
  .list {
    display: flex;
    flex-flow: row wrap;
    gap: 15px;
  }
  .list_item {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin: 0;
      flex: 1;
      min-width: 33%;
      max-width: 33%;
      padding: 15px;
      border: 1px solid #dedede;

      .list_item_data {
        text-align: left;

        .list_item_data_title {
          font-weight: 600;
        }
      }
  }
</style>
