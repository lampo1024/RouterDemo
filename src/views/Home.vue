<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
		<p>当前应用名称为：{{appName}}</p>
		<button @click="updateAppName">更新应用名称</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { mapState, mapMutations } from "vuex";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  computed: {
    ...mapState({
      appName: state => state.appName
    })
  },
  methods: {
    ...mapMutations({
      renameAppName: "SET_APP_NAME"
    }),
    updateAppName() {
      this.renameAppName("New App Name");
    }
  }
};
</script>
