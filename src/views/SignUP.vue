<template>
    <div class="columns">
        <div class="column is-half is-offset-one-quarter is-centered ">
            <div class="sign-up">
                <div class="field">
                    <label class="label">Name</label>
                    <div class="control">
                        <input class="input" type="text" v-model="email" placeholder="Text input">
                    </div>
                </div>
                <div class="field">
                    <label class="label">Username</label>
                    <div class="control ">
                        <input class="input " type="password" placeholder="Text input" v-model="password">
                    </div>                  
                </div>
                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-link" @click="signUp">Sign UP</button>
                    </div>
                      <div class="control">
                       <router-link to="login"><button class="button is-link" > login</button></router-link> 
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
import firebase from 'firebase';
export default {
    name : 'signUP',
    data(){
        return {
            email :'',
            password : ''
        }
    },
    methods:{
        signUp: function(){
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                function(user){
                    alert('Your Account Has succesfull created'+ user);
                },
                function(err){
                    console.log(err)
                    alert('opps.' +err.message)
                }
            );
        }
    }
}
</script>