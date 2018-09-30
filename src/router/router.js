import Home from "@/views/Home.vue";

export default [{
		path: "/",
		name: "home",
		alias: "/home_page",
		component: Home
	},
	{
		path: "/about",
		name: "about",
		component: () =>
			import( /* webpackChunkName: "about" */ "@/views/About.vue"),
		meta: {
			title: '关于我'
		}
	},
	{
		path: "/login",
		name: "login",
		component: () =>
			import("@/views/login.vue")
	},
	{
		path: "/argu/:name",
		name: "argu",
		component: () =>
			import("@/views/argu.vue"),
		props: true
	},
	{
		path: "/parent",
		component: () =>
			import("@/views/parent.vue"),
		children: [{
			path: "child",
			component: () =>
				import("@/views/child.vue")
		}]
	},
	{
		path: "/named_view",
		components: {
			default: () =>
				import("@/views/child.vue"),
			email: () =>
				import("@/views/email.vue"),
			tel: () =>
				import("@/views/tel.vue")
		}
	},
	{
		path: "/main",
		redirect: to => "/"
	},
	{
		path: "*",
		component: () =>
			import("@/views/404.vue")
	}
];
