<template>
<Dialog as="div" @close="close" :open="open">
<DialogPanel>
    <div class="backdrop">
        <div class="addCategory">
            <div class="containerForm">
                <form class="form" form v-on:submit.prevent="postProduct">
                    <h2>+ Add product</h2>
                    <div class="labelContainer">
                        <label><p>Add name</p><input type="text" v-model="data.name" placeholder="Enter a name" required/></label>
                        <label for="genre">Add category
                        <select v-model="data.descriptionProductline" required>
                        <option v-for="category in infoProduct" :value="category.description" :key="category.id"> {{category.name}} </option>
                        </select>
                        </label>
                    </div>
                    <div class="labelContainer">
                        <label><p>Add stock</p><input type="number" v-model="data.stock" placeholder="Enter a stock" required/></label>
                    </div>
                    <div class="buttonContainer">
                        <button id="buttonSignIn"><p>Add product</p></button>  
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
            console.log(this.data)
            this.$emit('updateProduct', this.data)
        },
        getProductLine() {
            axios.get('/productline', {
                headers: {
                    Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).headers.authorization
                }
            })
            .then(response => {
                this.infoProduct = response.data;
                console.log(this.infoProduct);
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

h2 {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 1rem;
    color: black;
}
.circle {
    top: 140px;
    left: 590px;
}

.addCategory {
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 24px;
    background: #fff;
    background-blend-mode: overlay;
    border: 2px solid rgba(255, 255, 255, 0.027);
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

input, select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border-radius: 0px;
  background-color: white;
  border-bottom: 2px solid #A5A8AB;
  color: black;
}

button {
    display: flex;
    justify-content: start;
    align-items: center;
    background: #E08864;
    padding: 28px;
    border-radius: 0px;
}

button p {
    color: white;
}


p, label {
    color: black;
}

input::placeholder {
    color: #A5A8AB;
}
</style>
