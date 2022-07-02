<template>
<Dialog as="div" @close="close" :open="open">
<DialogPanel>
    <div class="backdrop">
        <div class="addCategory">
            <div class="containerForm">
                <form ref="addproduct" class="form" form v-on:submit.prevent="postProduct">
                <div class="formContent">
                    <div class="header">
                        <h2>Add product</h2>
                        <h2 @click="close">x</h2>
                    </div>
                    <div class="email">
                        <label>Product name
                        <input v-model="data.name" placeholder="Enter the name of the product" type="text" required/></label>   
                    </div>
                    <div class="name">
                        <div class="firstName">
                            <label> Category
                            <select v-model="data.descriptionProductline" required>
                            <option v-for="category in infoProduct" :value="category.name" :key="category.id"> {{category.name}} </option>
                            </select>
                            </label>   
                        </div>
                        <div class="lastName">
                            <label>Stock
                            <input v-model="data.stock" type="number" required/></label>   
                        </div>
                    </div>
                    <button>Add product</button>        
                </div>
                </form>
            </div>
        </div>
    </div>
    </DialogPanel>
    </Dialog>
</template>

<script setup>
import axios from '../axios-common'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { defineProps, defineEmits, toRefs } from 'vue'

const props = defineProps({
    open: Boolean,
})
const emit = defineEmits(['closeAddProduct', 'updateProduct'])
const { open } = toRefs(props)

function close() {
    emit('closeAddProduct', false)
}
</script>

<script>
export default {

    data() {
        return {
            data: {
                name: '',
                stock: '',
                descriptionProductline: '',
            }
        }
    },
    methods: {
        closeAddProduct() {
            this.$emit('poopy')
        },
        postProduct() {
            if (confirm('Are you sure you want to add this product?')) {
                this.$emit('updateProduct', this.data)
                this.$refs.addproduct.reset();
                this.close();
            }
            this.$refs.addproduct.reset();
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
        },
    },
    mounted() {
        this.getProductLine()

    }    
}
</script>

<style scoped>
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
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f3f3f3;
}

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

.firstName {
    width: 80%;
}

.lastName {
    width: 20%;
}


</style>
