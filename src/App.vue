<template>
  <div id="app">
    <div id="nav">
			<MyHeader />
			<NavBar />
    </div>
		<router-view key="default"/>			
		<router-view key="email" name="email"/>
		<router-view key="tel" name="tel"/>
  </div>
</template>
<script>
import MyHeader from "_c/MyHeader";
import NavBar from "_c/NavBar";
export default {
  components: { MyHeader, NavBar },
  data() {
    return {
      routerTransition: ""
    };
  }
};
</script>

<style lang="less">
.router-enter {
  opacity: 0;
}
.router-enter-active {
  transition: opacity 1s ease;
}
.router-enter-to {
  opacity: 1;
}
.router-leave {
  opacity: 1;
}
.router-leave-active {
  transition: opacity 1s ease;
}
.router-leave-to {
  opacity: 0;
}
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
