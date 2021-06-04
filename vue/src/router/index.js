import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/Index.vue';
import Types from '@/views/Types.vue';
import Leaderboard from '@/views/Leaderboard.vue'

const routerHistory = createWebHistory()
const routes = [
	{
		path: '/',
		component: Types
	},
	{ path: '/wallet', component: Index },
	{ path: '/leaderboard', component: Leaderboard },
]

const router = createRouter({
	history: routerHistory,
	routes
})

export default router
