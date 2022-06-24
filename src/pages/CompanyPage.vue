<template>
<div v-if="showAddCategory"><AddCategory @close="toggleAddCategory"/></div>
<div v-if="showAddProduct"><AddProduct @close="toggleAddProduct"/></div>
<default-layout>
    <div class="containerLeft">
        <div class="leftHeader">
            <div class="leftItemInfo">
                <p># of items stored</p>
                <h1>{{ info }}</h1>
            </div>
            <hr>
        </div>
    </div>
    <div class="containerRight">
        <button @click="toggleAddCategory" class="buttonCategory">
            <h4>Set up category</h4>
            <p>Create new category</p>
        </button>
        <button @click="toggleAddProduct" class="buttonProduct">
            <h4>Add new product</h4>
            <p>Store an item</p>
        </button>
    </div>
</default-layout>
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout'
import axios from '../axios-common'
</script>

<script>
import AddCategory from '../components/AddCategory'
import AddProduct from '../components/AddProduct'

export default {
    name: 'CompanyPage',
    components: { AddCategory, AddProduct },
    data() {
        return {
            info: null,
            infoProduct: null,
            test: null,
            showAddCategory: false,
            showAddProduct: false,
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
            .then(response => {
                this.info = Object.keys(response.data).length;
            })
            .catch((error) => console.log(error.response.data))
        },
        getProduct() {
            axios.get('/product', {
                headers: {
                    Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).headers.authorization
                }
            })
            .then(response => (this.infoProduct = response.data))
            .catch((error) => console.log(error.response.data))
        },
        toggleAddCategory() {
            this.showAddCategory = !this.showAddCategory
            this.getProductLine()
        },
        toggleAddProduct() {
            this.showAddProduct = !this.showAddProduct
            this.getProductLine()
        }
    },
    mounted() {
        this.getProductLine()
        this.getProduct()
    }
}

</script>

<style scoped>
h3 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
}
/* Styling left side */
.containerLeft {
    width: 70%;
    background-color: white;
}

.leftHeader {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 48px;
}
.leftItemInfo h1 {
    font-size: 64px;
}

/* Styling right side */
.containerRight {
    display: flex;
    flex-direction: column;
    width: 30%;
    background-color: green;
}

/* Buttons Components */
</style>