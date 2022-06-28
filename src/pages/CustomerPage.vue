<template>
<default-layout>
    <customer-component
    @openModal="(options) => openAddCustomers(options)"
    :allOrders="allOrders"
    ></customer-component>
    <order-popup
    :open="status"
    @closeModal="(options) => closeAddCustomers(options)"
    @createOrder="(options) => createOrders(options)">
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
})

function createOrders(order) {
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

</script>