<template>
<default-layout>
<div class="container">
    <h1>Welcome to the company!</h1>
    <div class="formContainer">
        <form>
            <label>Enter phone<input type="text"/></label>
            <label>Enter address<input type="text"/></label>
            <label>Enter postalcode<input type="text"/></label>
            <label>Enter name<input type="name"/></label>
        </form>
    </div>
</div>
</default-layout>
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout'
import axios from '../axios-common'

function submitForm() {
    axios.get('/user', {
        headers: {
            Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).headers.authorization
        }
    }).then((response) => console.log(response));
}
submitForm();
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
}
</style>