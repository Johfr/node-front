<template>
  <div class="container">
    <h2>Se connecter</h2>
    <p v-show="showErrors">Des erreurs existent, merci de les corriger</p>
    <form action="" class="form">
      <label class="form_label" for="email">
        <span class="form_label_email">email</span>
        <input v-model="email" class="form_input" type="text" name="" id="email" placeholder="Que vendez-vous ?">
      </label>
      
      <label class="form_label" for="password">
        <span class="form_label_title">password</span>
        <input v-model="password" class="form_input" type="text" name="" id="password" placeholder="0">
      </label>

      <input class="submit-btn btn primary" type="submit" value="Login" @click="signup">
    </form>
  </div>
</template>

<script>
import { requestAPI } from '../../services/api.js';
// import axios from 'axios';

export default {
  name: 'LoginForm',
  props: {},
  watch: {},
  data() {
    return {
      email: null || 'j2@j.jj',
      password: null || '123456789',
      showErrors: false,
    }
  },
  mounted() {},
  methods: {
    async signup(e) {
      e.preventDefault()
      let formValidate = false
      const formDatas = {
          email: this.email,
          password: this.password,
        }
      if (this.email != null && this.password != null) {
        formValidate = true
      } else {
        formValidate = false
        this.showErrors = true
      }

      if (formValidate) {
        try {
          requestAPI('post','http://localhost:3000/api/auth/login', formDatas)
          .then((response) => {
            sessionStorage.setItem("AUTH_TOKEN", response.data.token)
            sessionStorage.setItem("UID", response.data.userId)
          })
          // const postDatas = axios['post']('http://localhost:3000/api/auth/login', formDatas)
          // postDatas
          //   .then((response) => {
          //     console.log('response', response)
          //     console.log(response.headers);
          //     // response.headers['Authorization'] = 'Bearer ' + response.data.token;
          //     // if (response.status === 201) {
          //     //   console.log('ok')
          //     //   // this.showSuccess = true
          //     //   // setTimeout(() => {
          //     //   //   this.showSuccess = false
          //     //   // }, 4000)
          //     // }
          //   })
        } catch (error) {
          throw new Error(error.message);
        }
      } else {
        this.showErrors = true
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.form {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 500px;
  padding: 15px;
  margin: 0 auto;
  
  .form_label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 15px;
  }

  .form_label_title {
    font-weight: 600;

    &::first-letter {
      text-transform: capitalize;
    }
  }

  .form_input {
    width: 100%;
    height: 30px;
    margin-top: 15px;
    padding-left: 15px;
    border: 1px solid #dedede;
    box-shadow: unset;
  }
}
</style>
