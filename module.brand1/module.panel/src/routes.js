
import { createRouter, createWebHistory  } from 'vue-router'

const Raports = () => import('./components/Raports.vue')

const routes = [
    { path: '/raports', name: 'Raports', component: Raports },
]
const router = createRouter({
    history: createWebHistory('panel'),
    routes
})

export default router