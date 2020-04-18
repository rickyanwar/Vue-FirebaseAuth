<template>
    <div class="login">
        <div class="columns is-vcentered is-centered ">
            <div class="column is-3">
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input class="input" type="email" v-model="email" placeholder="Email">
                    </p>
                </div>
                <div class="field">
                    <p class="control has-icons-left">
                        <input class="input" type="password" v-model="password" placeholder="Password">
                    </p>
                </div>
                <div class="buttons has-addons is-centered">
                    <button class="button is-success " @click="login">
                        Login
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import firebase from 'firebase';

    export default {
        name: 'login',
        data() {
            return {
                email: '',
                password: ''
            };
        },
        methods: {
            login: function () {
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                   () =>{
                      this.$router.replace('home')
                    },
                    (err) => {
                        alert('Ops' + err.message)
                    }
                )
            }
        }

    }
</script>