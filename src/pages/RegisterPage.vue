<template>
<div class="containerLoginRegister">
    <div class="formDiv">
        <form v-on:submit.prevent="submitForm">
            <div class="formContent">
                <h2>Register here</h2>
                <label> {{ this.message }}</label>
                <div class="name">
                    <div class="firstName">
                        <label>First Name
                        <input v-model="form.firstName" placeholder="Enter your first name" type="text" required/></label>
                    </div>
                    <div class="lastName">
                        <label>Last Name
                        <input v-model="form.lastName" placeholder="Enter your last name" type="text" required/></label>   
                    </div>
                </div>
                <div class="email">
                    <label>Email
                    <input v-model="form.email" placeholder="Enter your email" type="email" required/></label>   
                </div>
                <div class="password">
                    <label>Password
                    <input v-model="form.password" placeholder="Enter your password" type="password" required/></label>   
                </div>
                <button>Register now</button>        
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
                    <h3>Already have an account?</h3>
                    <button @click="$router.push('login')">Login here</button>
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
    gap: 12px;
    height: 41.5vh;
    justify-content: center;
}
.line {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.linepart {
    height: 17.4%;
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
</style>


<script>
import axios from '../axios-common'

export default {
    name : 'RegisterPage',
    data() {
        return {
            message: '',
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
                confirm("Registration successful, confirm your email now!")
                this.$router.push('login')
            })
            .catch((error) => {
                console.log(error)
                this.message = error.response.data
            })
        }
    }
}
</script>