<template>
<div class="container">
    <form v-on:submit.prevent="submitForm">
        <p>{{message}}</p> 
        <input v-model="form.email" type="email" name="email"/>
        <input v-model="form.password" type="password" name="password"/>
        <button id="buttonSignIn">Submit</button>
    </form>
</div>
</template>


<script>
import { useAuthStore } from '../stores/authStore'

export default {
    name : 'SigninView',
    data() {
        return {
            form: {
                email: '',
                password: ''
            },
            message: ''
        }
    },
    setup() {
        const authStore = useAuthStore()
        return { authStore } 
    },
    methods: {
        submitForm() {
            this.authStore.login(this.form.email, this.form.password)
            .catch((error) => this.message = error.response.data)
        }
    }
}
</script>

<style>

</style>