<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
		<p>当前应用名称为：{{appName}}</p>
		<button @click="updateAppName">更新应用名称</button>
		<button @click="handleGo('back')">返回上一页</button>
		<button @click="handleGo('jump')">跳转到</button>
		<button @click="handleGo('replace')">替换页</button>
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
  beforeRouteEnter(to, from, next) {
    console.log("to:" + to.name + ",from:" + from.name);
    next(vm => {
      console.log(vm);
    });
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
    },
    handleGo(type) {
      switch (type) {
        case "back":
          this.$router.go(-1);
          break;
        case "jump":
          this.$router.push({
            name: "argu",
            params: {
              name: "Hi,Rector"
            }
          });
          break;
        case "replace":
          this.$router.replace("about");
          break;
      }
    }
  }
};
</script>
