
import { createRouter, createWebHistory  } from 'vue-router'

const Home = () => import('./components/Home.vue')
const Test = () => import('./components/Test.vue')

const routes = [
    { path: '/', name: 'Home', component: Home},
    { path: '/test', name: 'Test', component: Test },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router