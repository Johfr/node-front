<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <h2>Get Articles</h2>
    <ul class="list">
      <li class="list_item" v-for="data in datas" :key="data.id">
        <a :href="'/article/' + data._id" class="list_item_data">
          <span class="list_item_data_title">title:</span>
          {{ data.title }}

          <span class="list_item_data_title">
            <img class="list_item_data_img" :src='data.imageUrl' />
          </span>

          <span class="list_item_data_title">description:</span>
          {{ data.description }}

          <span class="list_item_data_title">prix:</span>
          {{ data.prix }}€

          <span class="list_item_data_title">userId:</span>
          {{ data.userId }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
// import axios from 'axios';

export default {
  name: 'Dashboard',
  props: {
    msg: String,
    datas: Object,
    uid: String
  },
  // data() {
  //   return {
  //   datas: null
  //   }
  // },
  // mounted() {
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #000;
  text-decoration: none;
}
.container {
  max-width: 1200px;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;
  border: 1px solid;
}
.list {
  display: flex;
  flex-flow: row wrap;
  gap: 15px;
}
.list_item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    flex: 1;
    min-width: 33%;
    max-width: 33%;
    padding: 15px;
    border: 1px solid #dedede;

    .list_item_data {
      // text-align: left;

      .list_item_data_title {
        font-weight: 600;
      }
      .list_item_data_img {
        width: calc(100% - 50px);
        height: auto;
      }
    }
}
</style>
