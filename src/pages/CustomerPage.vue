<template>
<default-layout>
    <customer-component
    @addProductOrder="(options) => addProductToOrder(options)"
    @deleteProductOrder="(options) => deleteProductToOrder(options)"
    @openModal="(options) => openAddCustomers(options)"
    @deleteOrder="(options) => deleteOrders(options)"
    @updateStatus="(options) => updateStatusOrder(options)"
    @sendChangelog="(options) => postChangelog(options)"
    :allOrders="allOrders"
    :allProducts="allProducts"
    ></customer-component>
    <order-popup
    :open="status"
    @closeModal="(options) => closeAddCustomers(options)"
    @createOrder="(options) => createOrders(options)"
    >
    </order-popup>
</default-layout>
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout'
import OrderPopup from '@/components/OrderPopup'
import CustomerComponent from '@/components/CustomerComponent'
import axios from '@/axios-common'
import { ref, onMounted } from 'vue'

let allOrders = ref([])
let allProducts = ref([])
// Reference Boolean om het modal 'AddCustomer' te openen of te sluiten
let status = ref(false)

// Reference Boolean om het modal 'AddCustomer' te sluiten
function openAddCustomers(options) {
    status.value = options
}

// Reference Boolean om het modal 'AddCustomer' te openen
function closeAddCustomers(options){
    status.value = options
}

onMounted(() => {
    getAllProducts()
    getAllOrders()
})

function createOrders(order) {
    // add order to array
    axios.post('/orders', order, {
        headers: {
            Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).headers.authorization
        }
    })
    .then((response) => {
        allOrders.value.push(response.data)
    })
    .catch((error) => console.log(error.response.data))
}

function deleteOrders(order) {
    // delete order out of arra
    axios.delete('/orders/' + order, {
        headers: {
            Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).headers.authorization
        }
    })
    .then((response) => {
        console.log(response)
        allOrders.value = allOrders.value.filter(item => item.name !== order)
    })
    .catch((error) => console.log(error.response.data))
}

function addProductToOrder(order) {
    if (order.stock !== 0) {
            axios.put('/orders', order, {   
        headers: {
            Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).headers.authorization
        }
    })
    .then((response) => {
        const allOrdArrayObj = allOrders.value.find(orderObject => orderObject.id === response.data.id)
        const allOrdArrayIndex = allOrders.value.indexOf(allOrdArrayObj)
        allOrders.value[allOrdArrayIndex] = response.data
        
    })
    .catch((error) => console.log(error.response.data))
    }
}

function getAllProducts() {
    axios.get('/product', {
        headers: {
            Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).headers.authorization
        }
    })
    .then(response => (
        allProducts.value = response.data
    ))
    .catch((error) => console.log(error.response.data))
}

function getAllOrders() {
    axios.get('/orders', {
        headers: {
            Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).headers.authorization
        }
    })
    .then(response => (
        allOrders.value = response.data,
        console.log(allOrders.value)
    ))
    .catch((error) => console.log(error.response.data))
}

function deleteProductToOrder(product) {

    axios.put('/orders/delete', product, {
        headers: {
            Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).headers.authorization
        }
    })
    .then((response) => {
        const allOrdArrayObj = allOrders.value.find(orderObject => orderObject.id === response.data.id)
        const allOrdArrayIndex = allOrders.value.indexOf(allOrdArrayObj)
        allOrders.value[allOrdArrayIndex] = response.data
    })
    .catch((error) => console.log(error.response.data))
}

function postChangelog(options) {
    axios.post('/changelog', options, {
        headers: {
            Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).headers.authorization
        }
    })
    .then((response) => {
        const allOrdArrayObj = allOrders.value.find(orderObject => orderObject.id === response.data.id)
        const allOrdArrayIndex = allOrders.value.indexOf(allOrdArrayObj)
        allOrders.value[allOrdArrayIndex] = response.data
    })
    .catch(error => {
        console.log(error)
    })
}

function updateStatusOrder(options) {
    axios.put('/orders/status', options, {
        headers: {
         Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).headers.authorization
        }
    })
    .then(response => {
        const allOrdArrayObj = allOrders.value.find(orderObject => orderObject.id === response.data.id)
        const allOrdArrayIndex = allOrders.value.indexOf(allOrdArrayObj)
        allOrders.value[allOrdArrayIndex] = response.data
    })
    .catch((error) => console.log(error.response.data), console.log(this.deletedProduct.id))
}

</script>

<style scoped>
</style>