import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

Vue.config.productionTip = false
new Vue({
	router,
	store,
	render: h => h(App),
	mounted() {
		this.$router.addRoutes([{
			path: '/contact',
			name: 'contact',
			component: () =>
				import( /* webpackChunkName: "about" */ '@/views/Contact.vue')
		}, {
			path: '/faq',
			name: 'faq',
			component: () =>
				import( /* webpackChunkName: "about" */ '@/views/Contact.vue')
		}])
	}
}).$mount('#app')
