<template>
<div class="containerLoginRegister">
    <div class="circle"></div>
    <div class="registerForm">
    <div class="leftSignIn">
        <form v-on:submit.prevent="submitForm">
            <h2>Register now</h2>
            <div class="registerName">
                <div class="registerFirst">
                   <label style="margin-bottom: -12px;">First Name
                    <input v-model="form.firstName" type="text" name="firstName" placeholder="Enter your first name"/></label> 
                </div>
                <div class="registerLast">
                   <label style="margin-bottom: -12px;">Last Name
                    <input v-model="form.lastName" type="text" name="lastName" placeholder="Enter your last name"/></label>
                </div>
            </div>
            <label style="margin-bottom: -12px;">Email
            <input v-model="form.email" type="email" name="email" placeholder="Enter your email here"/></label>
            <label style="margin-bottom: -12px;">Password
            <input v-model="form.password" type="password" name="password" placeholder="Enter your password here"/></label>
                <div class="buttons">
                <button class="login"><p>Register now</p></button>
                <div class="register"><a href="/login">Already have an account</a></div>
                </div>
        </form>
    </div>
    </div>
</div>
</template>


<style scoped>
.circle { 
    top: 15%;
    left: 28.5%;
}
.containerLoginRegister {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #19173D;
}

.leftSignIn {
    padding: 24px;
    padding-bottom: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25vw;
    background-color: #262450;
    border-radius: 12px;
    border: 2px solid rgba(255, 255, 255, 0.027);
    background-blend-mode: overlay;
}

form {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 18px;
}

label {
    display: flex;
    flex-direction: column;
    gap: 3px;
}

.registerName {
    display: flex;
    flex-direction: row;
    gap: 24px;
}

.registerFirst, .registerLast {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 24px;
}

.login {
    width: 7.5%;
    position: absolute;
    box-shadow: 0px 3px 20px rgba(0, 83, 100, 0.11), 0px 5px 40px #00d9ff49;
}

.buttons {
    padding-top: 6px;
}
.register {
    display: flex;
    justify-content: end;
    padding-left: 50%;
    padding-right: 12px;
    align-items: center;
    width: 30%;
    height: 30px;
    background: #19173D;
    border: 0px solid rgba(255, 255, 255, 0.205);
    border-radius: 12px;
}

.register p {
    font-size: 12px;
    color: #7B78AA;
}
</style>


<script>
import axios from '../axios-common'

export default {
    name : 'RegisterPage',
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