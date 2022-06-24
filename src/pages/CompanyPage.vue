<template>
<default-layout>
<div class="container">
    <!-- <div class="containerProductline">
        <ul v-for="book in info" :key="book.description">
            <li>
                <h3>{{ book.description }}</h3>
                <p>{{ book.image }}</p>
             </li>
        </ul>
    </div> -->
    <h1>Welcome to the company!</h1>
    <div class="containerForm">
        <form class="form" form v-on:submit.prevent="postProductline">
            <h3>Add category</h3>
            <hr>
            <div class="labelContainer">
                <label><p>Add description</p><input type="text" v-model="data.description" placeholder="Enter a description"/></label>
                <label><p>Add image</p><input type="text" v-model="data.image" placeholder="Enter a image"/></label>
            </div>
            <div class="buttonContainer">
                <button id="buttonSignIn"><p>Add category</p></button>  
            </div>
        </form>
    </div>
</div>
</default-layout>
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout'
import axios from '../axios-common'

</script>

<script>
export default {
    name: 'CompanyPage',
    data() {
        return {
            info: null,
            data: {
                description: '',
                image: '',
            }
        }
    },
    methods: {
        postProductline() {
            axios.post('/productline', this.data, {
                headers: {
                    Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).headers.authorization
                }
            })
            .then((response) => console.log(response))
            .catch((error) => console.log(error.response.data))
        },
        getProductLine() {
            axios.get('/productline', {
                headers: {
                    Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).headers.authorization
                }
            })
            .then(response => (this.info = response.data))
            .catch((error) => console.log(error.response.data))
        }
    },
    mounted() {
        this.getProductLine()
    }
}

</script>

<style scoped>

.container {
    display: flex;
    flex-direction: column;
}
.containerProductline {
    display: flex;
    flex-direction: column;
    gap: 24px;
}
.containerProductline ul {
    background-color: grey;
}
h3 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
}

.containerForm {
    display: flex;
    flex-direction: row;
    padding: 24px;
}

.form {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 24px;
}

.labelContainer {
    display: flex;
    gap: 24px;
}

.labelContainer label {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.buttonContainer button {
    width: 100%;
}

hr {
    border: none;
    background-color: #dfdfdf;
    height: 0.5px;
}
</style>