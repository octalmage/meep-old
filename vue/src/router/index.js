import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/Index.vue'
import Types from '@/views/Types.vue'

const routerHistory = createWebHistory()
const routes = [
	{
		path: '/',
		component: Types
	},
	{ path: '/wallet', component: Index }
]

const router = createRouter({
	history: routerHistory,
	routes
})

export default router
