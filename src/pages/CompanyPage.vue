<template>
<div v-if="showAddCategory"><AddCategory @close="toggleAddCategory"/></div>
<div v-if="showAddProduct"><AddProduct @close="toggleAddProduct"/></div>
<default-layout>
<div class="container">
    <button @click="toggleAddCategory" class="buttonCategory">
            <p>Add category</p>
        </button>
    <p @click="toggleAddProduct" class="buttonProduct">Add item</p>
    <div class="product">
        <div class="divProduct">
            div
        </div>
    </div>
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
            productCount: null,
            categoryCount: null,
            productData: null,
            productColumns: ['id', 'name', 'description', 'image', 'stock', 'price', 'category'],
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
                this.infos = response.data
                this.categoryCount = Object.keys(response.data).length
            })
            .catch((error) => console.log(error.response.data))
        },
        getProduct() {
            axios.get('/product', {
                headers: {
                    Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).headers.authorization
                }
            })
            .then(response => (
                this.productData = response.data,
                console.log(response.data),
                this.productCount = Object.keys(response.data).length
            ))
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
</style>