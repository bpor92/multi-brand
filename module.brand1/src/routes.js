
import products from '../../module.common/module.products/routes'

const Home = () => import('./components/Home.vue')
const Test = () => import('./components/Test.vue')

const routes = [
    { path: '/', name: 'Home', component: Home},
    { path: '/test', name: 'Test', component: Test },
    ...products
]

export default routes