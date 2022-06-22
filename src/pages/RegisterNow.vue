<template>
<div class="containerLoginRegister">
    <div class="leftSignIn">
        <form v-on:submit.prevent="submitForm">
            <div class="registerName">
                <div class="registerFirst">
                   <label style="margin-bottom: -12px;">First Name</label>
                    <input v-model="form.firstName" type="text" name="firstName" placeholder="Enter your first name"/> 
                </div>
                <div class="registerLast">
                   <label style="margin-bottom: -12px;">Last Name</label>
                    <input v-model="form.lastName" type="text" name="lastName" placeholder="Enter your last name"/> 
                </div>
            </div>
            <label style="margin-bottom: -12px;">Email</label>
            <input v-model="form.email" type="email" name="email" placeholder="Enter your email here"/>
            <label style="margin-bottom: -12px;">Password</label>
            <input v-model="form.password" type="password" name="password" placeholder="Enter your password here"/>
            <button id="buttonRegister"><p>Register now</p></button>
            <a href="/login">Already have a account</a>
        </form>
    </div>
    <div class="rightSignIn">
        <div class="background">
        </div>
    </div>
</div>
</template>


<style>
.registerName {
    display: flex;
    gap: 24px;
    width: 100%;
}

.registerFirst, .registerLast {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
}

</style>


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