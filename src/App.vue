<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/games">Games</router-link> |
      <router-link to="/games/new">Create Game</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "./scss/variables";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $appcolor;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: $linkcolorinactive;
    &.router-link-exact-active {
      color: $linkcolor;
    }
  }
}
</style>
