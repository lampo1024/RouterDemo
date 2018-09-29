<template>
	<div>
		{{appName}}
	</div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "header",
  computed: {
    ...mapState({
      appName: state => state.appName
    })
  }
};
</script>
