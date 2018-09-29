<template>
  <div id="app">
    <div id="nav">
			<Header/>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
			<router-link to="/contact">Contact</router-link> |
			<router-link to="/faq">FAQ</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
import Header from "_c/Header";
export default {
  components: { Header }
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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
</style>
