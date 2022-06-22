<template>
<div class="container">
    <form v-on:submit.prevent="submitForm">
        <input v-model="form.email" type="email" name="email"/>
        <input v-model="form.firstName" type="text" name="firstName"/>
        <input v-model="form.lastName" type="text" name="lastName"/>
        <input v-model="form.password" type="password" name="password"/>
        <button id="buttonSignIn">Submit</button>
    </form>
</div>
</template>


<script>
import axios from '../axios-common'

export default {
    name : 'RegisternowView',
    data() {
        return {
            form: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                terms: true
            },
        }
    },
    methods: {
        submitForm() {
            axios.post('/registration', this.form)
            .then((res) => {
                console.log(res)
            })
            .catch((error) => {
                console.log(error)
            })
        }
    }
}
</script>

<style>

</style>