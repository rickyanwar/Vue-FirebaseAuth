<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    
   
       <div class="columns is-vcentered is-centered ">
          <HelloWorld msg="Welcome to Your Vue.js App"/><br>
           <button class="button is-success" @click="logout">Logout</button>
        </div>
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from 'firebase'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    logout: function(){
      firebase.auth().signOut().then(()=>{
        this.$router.replace('login')
      })
    }
  }
}
</script>
