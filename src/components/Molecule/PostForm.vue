<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <h2>POST API</h2>
    <p v-show="showErrors">Des erreurs existent, merci de les corriger</p>
    <p v-show="showSuccess">Votre article a bien été ajouté !</p>
    <form action="" class="form">
      <label class="form_label" for="title">
        <span class="form_label_title">title</span>
        <input v-model="title" class="form_input" type="text" name="" id="title" placeholder="Que vendez-vous ?">
      </label>
      
      <label class="form_label" for="prix">
        <span class="form_label_title">prix (en €)</span>
        <input v-model="prix" class="form_input" type="text" name="" id="prix" placeholder="0">
      </label>
      
      <label class="form_label" for="description">
        <span class="form_label_title">description</span>
        <input v-model="description" class="form_input" type="text" name="" id="description" placeholder="Décrivez votre objet">
      </label>
      
      <label class="form_label" for="image">
        <span class="form_label_title">url de l'image</span>
        <input v-model="imageUrl" class="form_input" type="text" name="" id="" placeholder="http://...">
      </label>

      <input class="submit-btn" type="submit" :value='btnValue' @click="postData">
    </form>
  </div>
</template>

<script>
import { requestAPI } from '../../services/api.js';
// import axios from 'axios';

export default {
  name: 'PostForm',
  props: {
    msg: String,
    btnValue: {
      type: String,
      default: 'Ajouter'
    },
    apiMethods:  {
      type: String,
      default: 'post'
    },
    id:  {
      type: String,
      default: ''
    },
    dataToUpdate: {
      type: Object,
      default: function () {
        return {
          title: String,
          prix: Number,
          description: String,
          imageUrl: String,
        }
      },
      require: false,
    }
  },
  watch: {
    dataToUpdate() {
      return this.title = this.dataToUpdate.title, this.prix = this.dataToUpdate.prix, this.description = this.dataToUpdate.description, this.imageUrl = this.dataToUpdate.imageUrl
    },
  },
  data() {
    let title = null
    let prix = null
    let description = null
    let imageUrl = null
    // si on a des données à updater
    if (this.dataToUpdate.title.length > 1) {
      title = this.dataToUpdate.title
      prix = this.dataToUpdate.prix
      description = this.dataToUpdate.description
      imageUrl = this.dataToUpdate.imageUrl
    }
    return {
      datas: null,
      title,
      prix,
      description,
      imageUrl,
      showErrors: false,
      showSuccess: false,
      userId: sessionStorage.getItem('UID')
    }
  },
  mounted() {
    // console.log(this.dataToUpdate.title.length)
  },
  methods: {
    async postData(e) {
      e.preventDefault()
      let formValidate = false
      const formDatas = {
          title: this.title,
          description: this.description,
          imageUrl: this.imageUrl,
          userId: this.userId,
          prix: this.prix,
        }
      if (this.title != null && this.prix != null && this.description != null && this.imageUrl != null) {
        formValidate = true
      } else {
        formValidate = false
      }

      if (formValidate) {
        try {
          requestAPI(this.apiMethods, 'http://localhost:3000/api/stuff/' + this.id, formDatas)
            .then((response) => {
              console.log('response', response)
              if (response.status === 201) {
                this.showSuccess = true
                setTimeout(() => {
                  this.showSuccess = false
                }, 4000)
              }
            })
        } catch (error) {
          console.log('error', error)
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
