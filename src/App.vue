<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/addArticle">Ajouter un article</router-link> |
    <router-link to="/connection">Login</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}


.btn {
  max-width: 150px;
  color: #fff;
  padding: 5px 15px;
  border: unset;

  &.primary {
    background-color: #52f;
  }

  &.secondary {
    background-color: rgb(187, 159, 1);
  }

  &.tertiary {
    background-color: rgb(255, 34, 34);
  }

  &:hover {
    opacity: .5;
    cursor: pointer;
  }
}
</style>
