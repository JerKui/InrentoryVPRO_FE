<template>
<div class="containerLoginRegister">
    <div class="leftSignIn">
        <form v-on:submit.prevent="submitForm">
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


<style scoped>

.containerLoginRegister {
    width: 100vw;
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
    display: flex;
    justify-content: center;
    padding: 48px;
    width: 50vw;
}

form {
    display: flex;
    flex-direction: column;
    width: 100%;
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

label {
    display: flex;
    flex-direction: column;
    gap: 12px;
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