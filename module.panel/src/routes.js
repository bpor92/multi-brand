
import { createRouter, createWebHistory  } from 'vue-router'

const Raports = () => import('./components/Raports.vue')
const Home = () => import('./components/Home.vue')

const routes = [
    { path: '/', name: 'App', component: Home },
    { path: '/raports', name: 'Raports', component: Raports },
]
const router = createRouter({
    history: createWebHistory('panel'),
    routes
})

export default router