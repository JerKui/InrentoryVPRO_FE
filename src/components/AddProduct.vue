<template>
    <div class="backdrop">
        <div class="addCategory">
            <button @click="closeAddProduct" class="close"><p>x</p></button>
            <div class="containerForm">
                <form class="form" form v-on:submit.prevent="postProduct">
                    <h3>Add product</h3>
                    <hr>
                    <div class="labelContainer">
                        <label><p>Add name</p><input type="text" v-model="data.name" placeholder="Enter a name"/></label>
                    </div>
                    <div class="labelContainer">
                        <label><p>Add description</p><input type="text" v-model="data.description" placeholder="Enter a description"/></label>
                        <label><p>Add image</p><input type="text" v-model="data.image" placeholder="Enter a image"/></label>
                    </div>
                    <div class="labelContainer">
                        <label><p>Add price</p><input type="number" v-model="data.price" placeholder="Enter a price"/></label>
                        <label><p>Add stock</p><input type="number" v-model="data.stock" placeholder="Enter a stock"/></label>
                    </div>
                    <div class="buttonContainer">
                        <button id="buttonSignIn"><p>Add product</p></button>  
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from '../axios-common'
</script>

<script>
export default {
    data() {
        return {
            info: null,
            showAddCategory: false,
            data: {
                name: '',
                description: '',
                image: '',
                stock: '',
                price: '',
            }
        }
    },
    methods: {
        closeAddProduct() {
            this.$emit('close')
        },
        postProduct() {
            axios.post('/product', this.data, {
                headers: {
                    Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).headers.authorization
                }
            })
            .then((response) => console.log(response))
            .catch((error) => console.log(error.response.data))
        }
    }
}
</script>

<style scoped>
.addCategory {
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: white;
    gap: 24px;
}
.addCategory button {
    justify-content: flex-end;
    width: 50px;
}
.backdrop {
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    position: fixed;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
}

.form {
    display: flex;
    flex-direction: column;
    gap: 24px;
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
</style>
