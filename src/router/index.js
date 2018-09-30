import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import {
	setTitle
} from '@/lib/util'

Vue.use(VueRouter)

const router = new VueRouter({
	routes: routes,
	mode: 'history'
})

const isLogin = true

router.beforeEach((to, from, next) => {
	to.meta && setTitle(to.meta.title)
	if (to.name !== 'login') {
		if (isLogin) {
			next()
		} else {
			next({
				name: 'login'
			})
		}
	} else {
		if (isLogin) {
			next({
				name: 'home'
			})
		} else {
			next()
		}
	}
})


router.afterEach((to, from) => {
	//
})

export default router
