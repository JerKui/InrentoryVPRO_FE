<template>
<div class="container">
    <form v-on:submit.prevent="submitForm">
        <input v-model="form.email" type="email" name="email"/>
        <input v-model="form.name" type="text" name="name"/>
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
                email: '',
                name: '',
                password: ''
            }
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