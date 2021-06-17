<template>
  <div class="container">
    <h2>Signup - Créer un compte</h2>
    <p v-show="showErrors">Des erreurs existent, merci de les corriger</p>
    <p v-show="showErrorsUserExist">Cet utilisateur existe déjà dans la bdd</p>
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
// import { requestApi } from '../../services/api.js';
import axios from 'axios';

export default {
  name: 'SignupForm',
  props: {},
  watch: {},
  data() {
    return {
      email: null || 'j2@j.jj',
      password: null || '123456789',
      showErrors: false,
      showErrorsUserExist: false,
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
          // axios['post']('http://localhost:3000/api/auth/signup', formDatas)
          const postDatas = axios['post']('http://localhost:3000/api/auth/signup', formDatas)
          postDatas
            .then((response) => {
              console.log('response', response)
              if (response.status === 201) {
                console.log('ok')
                // this.showSuccess = true
                // setTimeout(() => {
                //   this.showSuccess = false
                // }, 4000)
              }
              console.log('fok')
            })
            .catch((error) => {
              console.log(error)
              this.showErrorsUserExist = true
              throw new Error(error);
            })
        } catch (error) {
          throw new Error(error);
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
