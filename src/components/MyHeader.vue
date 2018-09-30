<template>
	<div>
		{{appName}}
	</div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "myheader",
  computed: {
    ...mapState({
      appName: state => state.appName
    })
  }
};
</script>
