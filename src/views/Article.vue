<template>
  <div class="view-article">
    <h1>Find One</h1>
    <!-- Gabarit possible -->
    <!-- {{ data }} -->
    <p v-if="articleDelete">L'article a bien été supprimé, vous allez être redirigé</p>
    <section class="view-article_section" v-if="!articleDelete">
      <ul class="list">
        <li class="list_item">
          <span class="list_item_data_title">
            title:
            {{ data.title }}
          </span>

          <span class="list_item_data_title">
            description:
            {{ data.description }}
          </span>

          <span class="list_item_data_title">
            <img :src='data.imageUrl' />
          </span>

          <span class="list_item_data_title">
            prix:
            {{ data.prix }}
          </span>

          <span class="list_item_data_title">
            userId:
            {{ data.userId }}
          </span>
        </li>
      </ul>
      
      <div class="button" v-if="UserId">
        <button class="btn secondary" @click="showUpdateFormFn"> {{ btnValue }} </button>
        <button class="btn tertiary" @click="deleteArticle">Supprimer</button>
        <div class="form-section" v-show="showUpdateForm">
          <PostForm :dataToUpdate='data' :btnValue="'Modifier'" :apiMethods="'put'" :id='id' />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { requestAPI } from '../services/api.js';
import { getUid } from '../services/getUid.js';
// import axios from 'axios';
import PostForm from '@/components/Molecule/PostForm.vue'

export default {
  name: 'Article',
  components: {
    PostForm
  },
  data() {
    return {
      data: '',
      id: location.pathname.split('/')[2],
      btnValue: 'Modifier',
      showUpdateForm: false,
      articleDelete: false,
      UserId: null
    }
  },
  async mounted() {
    // const uid = await getUid()
    //   console.log('uid', uid)
    // uid.then((uid) => {
    //   console.log('uid', uid)
    // })
    try {
      const getOne = await requestAPI('GET', 'http://localhost:3000/api/stuff/' + this.id)
      this.data = getOne.data
      
      const uid = await getUid()
      this.UserId = uid
      console.log('uid', uid)
    } catch (error) {
      console.log('error', error)
      throw new Error(error.message);
    }
  },
  methods: {
    showUpdateFormFn () {
      this.showUpdateForm = !this.showUpdateForm
      if (this.showUpdateForm) {
        this.btnValue = 'Fermer'
      } else {
        this.btnValue = 'Modifier'
      }
    },
    async deleteArticle () {
      try {
        // const deleteArticle = await axios['DELETE']('http://localhost:3000/api/stuff/' + this.id)
        const deleteArticle = await requestAPI('DELETE', 'http://localhost:3000/api/stuff/' + this.id)
        if (deleteArticle.status === 201) {
          this.articleDelete = true
          setTimeout(() => {
            location.href="/"
          }, 3000)
        }
        return deleteArticle
      } catch (error) {
        throw new Error(error.message);
      }
    },
  }
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
