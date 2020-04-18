import firebase from 'firebase'
import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

let app = '';

var firebaseConfig = {
  apiKey: "AIzaSyCo0a1i99UxzTD-k9vxqNnvPLJgcfvAxbE",
  authDomain: "vue-auth-44c50.firebaseapp.com",
  databaseURL: "https://vue-auth-44c50.firebaseio.com",
  projectId: "vue-auth-44c50",
  storageBucket: "vue-auth-44c50.appspot.com",
  messagingSenderId: "1074173034616",
  appId: "1:1074173034616:web:27820b638ca5601ec6ed8d",
  measurementId: "G-G70RVD3FDR"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig)

firebase.auth().onAuthStateChanged(()=>{
  if (!app) {
    app = new Vue({
      router,
      render : h => h(App)
    }).$mount('#app');
  }
});