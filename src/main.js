import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Introduction from './view/Introduction.vue'
import Tekening from './view/Tekening.vue'
import Contact from './view/Contact.vue'
Vue.use(VueRouter);

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/', redirect: {
    name: 'introduction'
  }},
  { path: '/Introduction', component: Introduction, name: 'introduction' },
  { path: '/Tekening', component: Tekening, name: 'drawing' },
  { path: '/Contact', component: Contact, name: 'contact' }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes: routes
})

// Now the app has started!

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
