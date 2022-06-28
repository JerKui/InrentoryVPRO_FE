<template>
    <div @click.self="closeAddProduct" class="backdrop">
        <div class="circle"></div>
        <div class="addCategory">
            <div class="containerForm">
                <form class="form" form v-on:submit.prevent="putProduct">
                    <h2>+ {{oneProduct}}</h2>
                    <div class="labelContainer">
                        <label><p>Add Name</p><input type="text" v-model="data.name" placeholder="Enter a name" required/></label>
                        <label for="genre">Add category
                        <select v-model="data.descriptionProductline" required>
                        <option v-for="category in infoProduct" :value="category.description" :key="category.id"> {{category.description}} </option>
                        </select>
                        </label>
                    </div>
                    <div class="labelContainer">
                        <label><p>Add description</p><input type="text" v-model="data.description" placeholder="Enter a description" required/></label>
                        <label><p>Add image</p><input type="text" v-model="data.image" placeholder="Enter a image" required/></label>
                    </div>
                    <div class="labelContainer">
                        <label><p>Add price</p><input type="number" v-model="data.price" placeholder="Enter a price" required/></label>
                        <label><p>Add stock</p><input type="number" v-model="data.stock" placeholder="Enter a stock" required/></label>
                    </div>
                    <div class="buttonContainer">
                        <button id="buttonSignIn"><p>Update product</p></button>  
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from '../axios-common'

import { defineProps, toRefs, onMounted } from 'vue'

const props = defineProps({
    oneProduct: Number
})

const { oneProduct } = toRefs(props)

onMounted(() => {
}) 
console.log(oneProduct.value)
</script>

<script>
export default {
    data() {
        return {
            info: null,
            infoProduct: null,
            showAddCategory: false,
            data: {
                name: '',
                description: '',
                image: '',
                stock: '',
                price: '',
                descriptionProductline: '',
            }
        }
    },
    methods: {
        closeAddProduct() {
            this.$emit('close')
        },
        putProduct() {
            axios.post('/product', this.data, {
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
            .then(response => {
                this.infoProduct = response.data;
            })
            .catch((error) => console.log(error.response.data))
        }
    },
    mounted() {
        this.getProductLine()
    }
    }    

</script>

<style scoped>
.circle {
    top: 140px;
    left: 590px;
}

.addCategory {
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 24px;
    background: rgba(38, 36, 80, 1);
    background-blend-mode: overlay;
    border: 2px solid rgba(255, 255, 255, 0.027);
    border-radius: 18px;
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
