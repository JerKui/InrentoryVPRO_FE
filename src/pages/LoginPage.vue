<template>
<div class="containerLoginRegister">
    <div class="formDiv">
        <form v-on:submit.prevent="submitForm">
            <div class="formContent">
                <h2>Login here</h2>
                <label class="errormessage"> {{ this.message }}</label>
                <div class="email">
                    <label>Email
                    <input v-model="form.email" placeholder="Enter your email" type="email" required/></label>   
                </div>
                <div class="password">
                    <label>Password
                    <input v-model="form.password" placeholder="Enter your password" type="password" required/></label>   
                </div>
                <button>Login here</button>        
            </div>
        </form>
        <div class="line">
            <div class="linepart"></div>
            <p>or</p>
            <div class="linepart"></div>
        </div>
        <div>
            <div class="loginContent">
                <div class="login">
                    <h3>Not have an account yet?
                    </h3>
                    <button @click="$router.push('register')">Register here</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
.formDiv {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100vh;
    gap: 24px;
    background: #f3f3f3;
}

.formContent {
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    height: 41.5vh;
    width: 20vw;
}
.line {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.linepart {
    height: 13%;
    display: flex;
    flex-direction: row;
    width: 1px;
    background: rgba(0, 0, 0, 0.11);
}

.loginContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 41.5vh;
    width: 15vw;
    padding: 24px;
}
.login {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
}

.login button {
    width: 100%;
}
.name {
    width: 100%;
    display: flex;
    gap: 15px;
}

.firstName, .lastName {
    width: 50%;
}

.errormessage {
    color: red;
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