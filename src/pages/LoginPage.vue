<template>
<div class="containerLoginRegister">
    <div class="loginform">
        <div class="circle"></div>
        <div class="leftSignIn">
            <form v-on:submit.prevent="submitForm">
                <h2>Log in</h2>
                <label style="padding-bottom: -24px;">Email
                <input v-model="form.email" type="email" name="email" placeholder="Enter your email"/></label>
                <div v-if="emailError" class="error"> {{ emailError }}</div>
                <label style="padding-bottom: -12px;">Password
                <input v-model="form.password" type="password" name="password" placeholder="Enter your password"/></label>
                <div v-if="passwordError"> {{ passwordError }}</div>
                <div class="buttons">
                <button class="login"><p>Log in</p></button>
                <div class="register"><a href="/register">Register here</a></div>
                </div>
            </form>
        </div>       
    </div>
</div>
</template>

<style scoped>
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
    width: 20vw;
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
    padding-left: 40%;
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
import { useAuthStore } from '../stores/authStore'

export default {
    name : 'LoginPage',
    data() {
        return {
            form: {
                email: '',
                password: ''
            },
            message: '',
            emailError: '',
            passwordError: '',
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