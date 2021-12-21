import { createApp } from 'vue'
import App from './App.vue'
import './scss/brand2.scss'
import router from './routes'

createApp(App)
    .use(router)
    .mount('#app')
