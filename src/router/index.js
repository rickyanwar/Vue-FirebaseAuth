import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import signUP from '../views/SignUP.vue'

import firebase from 'firebase'
Vue.use(VueRouter)

  const routes = [
  {
    path: '*',
    redirect: '/login'
  },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signUP',
    component: signUP
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta : {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next)=>{
    const currentUser = firebase.auth().currentUser;
    const requiresAuth = to.matched.some(record =>record.meta.requiresAuth);

    if (requiresAuth && !currentUser) next('login');
    else if(!requiresAuth && currentUser) next('home');
    else next();
});

export default router
