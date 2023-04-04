import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'


import NAvBAr from './components/NAvBAr.vue';
 import homePage from './components/homePage.vue';
 import aboutPage from './components/aboutPage.vue';
 import packagePlaces from './components/packagePlaces.vue';
 import reviewsCust from './components/reviewsCust.vue';
 import bookingForm from './components/bookingForm.vue';
 import FooTer from './components/FooTer.vue';
 Vue.use(VueRouter)
 const routes = [
  {
    path: '/navbar',
    component: NAvBAr
  },
  {
    path: '/',
    component: homePage
  },
  {
    path: '/aboutpage',
    component: aboutPage
  },
  {
    path: '/packageplaces',
    component:packagePlaces
  },
  {
    path: '/reviewscust',
    component: reviewsCust
  },
  {
    path: '/bookingform',
    component:bookingForm
  },
  {
    path: '/footer',
    component:FooTer
  }
] 
const router = new VueRouter({
  mode: 'history',
  routes
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')




