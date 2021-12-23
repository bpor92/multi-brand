import routes from './routes'
import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter)


const router = new VueRouter({
    mode: 'history',
    linkActiveClass: 'active',
    routes,
    base: 'panel'
  })

new Vue({
  render: (h) => h(App),
  router
}).$mount('#panel');


