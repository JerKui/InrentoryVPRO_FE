<template>
<default-layout>
    <available-products 
    @openAddProduct="(options) => openAddProducts(options)" 
    @editProduct="(options) => openAddProducts(options)" 
    :allProducts="allProducts" 
    :cancerMaagd="cancerMaagd" 
    @deleteProduct="(product) => deleteProducts(product)">
    </available-products>
    <add-product :open="open" 
    @closeAddProduct="(options) => closeAddProduct(options)" 
    @updateProduct="(product) => updateProducts(product)">
    </add-product>
</default-layout>
</template>

<style scoped>
.style {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>

<script setup>
import axios from '@/axios-common';
import { ref, onMounted } from 'vue'
import DefaultLayout from '@/layouts/DefaultLayout'
import AddProduct from '@/components/AddProduct'
import AvailableProducts from '@/components/AvailableProducts'

let allProducts = ref([])
let cancerMaagd = 'Maagd'
let open = ref(false)

function openAddProducts(options) {
    open.value = options
}

function closeAddProduct(options) {
    open.value = options
}


onMounted(() => {
    axios.get('/product', {
        headers: {
            Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).headers.authorization
        }
    })
    .then(response => (
        allProducts.value = response.data,
        console.log(allProducts.value)
        // this.productCount = Object.keys(response.data).length
    ))
    .catch((error) => console.log(error.response.data))

})

function updateProducts(product) {
    axios.post('/product', product, {
        headers: {
            Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).headers.authorization
        }
    })
    .then((response) => {
        allProducts.value.push(response.data)
    })
    .catch((error) => console.log(error.response.data))
}

function deleteProducts(product) {
    const allProductsArrayObj = allProducts.value.find(productIndex => productIndex.id === product)
    const allIndex = allProducts.value.indexOf(allProductsArrayObj)
    allProducts.value.splice(allIndex, 1)
    axios.delete('/product/delete', {
    headers: {
        Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).headers.authorization
    },
    params : {
        id: product }
    })
    .then(response => (
        console.log(response.data),
        console.log(this.dataProduct),
        this.getProduct()
    ))
    .catch((error) => console.log(error.response.data), console.log(this.deletedProduct.id))
}

</script>
