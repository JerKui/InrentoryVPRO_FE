<template>
<div class="containerLoginRegister">
    <div class="leftSignIn">
        <form v-on:submit.prevent="submitForm">
            <p style="color: red;" >{{message}}</p> 
            <label style="padding-bottom: -24px;">Email</label>
            <input v-model="form.email" type="email" name="email" placeholder="Enter your email here"/>
            <label style="padding-bottom: -12px;">Password</label>
            <input v-model="form.password" type="password" name="password" placeholder="Enter your password here"/>
            <button id="buttonSignIn"><p>Log in</p></button>
            <a href="/registernow">Register here</a>
        </form>
    </div>
    <div class="rightSignIn">
        <div class="background">
        </div>
    </div>
</div>
</template>

<style>

.containerLoginRegister {
    width: 100vw;
    margin: 24px;
    display: flex;
    justify-items: center;
    align-items: center;
    background-color: #F7F7F7;
}

.rightSignIn {
    width: 50vw;
    background-color: #F7F7F7;
}

.leftSignIn {
    padding: 48px;
    width: 50vw;
}

form {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

input[type="email"], input[type="password"], input[type="text"] {
    height: 40px;
    border: 1px solid #E8E8E8;

    font-family: 'Inter', sans-serif;
    font-size: 16px;
    line-height: 24px;
    padding-left: 12px;
    color: #585757;
    overflow: hidden;
}

button {
    color: white;
    height: 40px;
    background: #000000;
    border: none;
    overflow: hidden;
}

.background {
  background: linear-gradient(132deg, #FC415A, #591BC5, #212335);
  background-size: 400% 400%;
  animation: Gradient 15s ease infinite;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  padding:0;
  margin:0px;
}

button p {
    font-family: 'Inter';
}

/* Animate Background*/
@keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
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