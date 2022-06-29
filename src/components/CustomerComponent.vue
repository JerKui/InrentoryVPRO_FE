<template>
    <div class="flex--1">
        <h1 @click="open">Orders</h1>
        <div class="orders">
           <div class="order" v-for="(order) in allOrders" :key="order.id">
            <div class="orderHeader">
                <div class="orderHeaderLeft">
                    <div class="orderHeader_item">
                        <h3>ORDER PLACED</h3>
                        <p> {{ order.orderDate }}</p>
                    </div>
                    <div class="orderHeader_item">
                        <h3>TOTAL PRODUCTS</h3>
                        <p>15</p>
                    </div>
                    <div class="orderHeader_item">
                        <h3>ORDER BY</h3>
                        <p>Jerry Kuijper</p>
                    </div>                    
                </div>
                <div class="orderHeaderRight">
                    <div class="orderHeader_itemRight">
                        <h3>ORDER # 112-1782113-0807425</h3>
                        <p>Order Details</p>
                    </div> 
                </div>

            </div>
            <div class="orderContent">
                <div class="orderContentLeft">
                    <h3>{{ order.name }}</h3>
                    <div class="orderContentLeft_items">
                    </div>
                </div>
                <div class="orderContentRight">
                        <select>
                            <option v-for="(product) in allProducts" :key="product.name">{{ product.name }}</option>
                        </select>
                    <button class="closeButton">ADD PRODUCT</button>
                    <button class="deleteButton">DELETE ORDER</button>
                </div>
            </div>
            <div class="orderFooter">
                <h3>ESTIMATED RETURN DATE:</h3>
                <p>{{ order.returnDate }}</p>
            </div>
           </div>
        </div>
    </div>
</template>

<style scoped>

select{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    border: 2px solid #F0F0F0;
    font-size: 16px;
    line-height: 24px;
    padding-left: 12px;
    color: black;
    overflow: hidden;
    border-radius: 0px;
    background-color: #fff;
}

h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 52px;

}

h3 {
    font-weight: 400;
    color: #A5A8AB;
}

p {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    color: black;
}

.containers {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    
    position: absolute;
}

.flex--1 {
    display: flex;
    flex-direction: column;
    gap: 24px;
  flex: 1 1 0%;
  overflow-x: hidden;
  padding: 48px;
}

.orders {
    display: flex;
    flex-direction: column;
    gap: 12px;
}
.orderHeader {
    padding: 32px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: #FAFAFA;
    border: 1px solid #F0F0F0;
}

.orderHeaderLeft {
    display: flex;
    gap: 120px;
}

.orderHeader_itemRight {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
.orderContent {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 32px;
    border: 1px solid #F0F0F0;
    background: #FFFFFF;
}

.orderContentLeft {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.orderContentLeft h3 {
    color: black;
    font-size: 24px;
    font-weight: 500;
}

.orderContentLeft p {
    font-size: 20px;
    font-weight: 400;
    color: #A5A8AB;
}

.orderContentLeft_items {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.orderContentRight {
    display: flex;
    flex-direction: column;
    gap: 6px;
}

.orderContentRight .closeButton {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #E08864;
    border: 1px solid #F0F0F0;
    padding: 28px;
    width: 250px;
    font-size: 14px;
    font-weight: 500;
    color: white;
    border-radius: 0px;
    cursor: pointer;
}

.orderContentRight .deleteButton {
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    border: 2px solid #F0F0F0;
    padding: 28px;
    width: 250px;
    font-size: 14px;
    font-weight: 500;
    color: black;
    border-radius: 0px;
    cursor: pointer;
}
.orderFooter {
    padding: 16px;
    display: flex;
    gap: 24px;
    flex-direction: row;
    border: 1px solid #F0F0F0;
    background: #FFFFFF;

}


</style>

<script setup>

import { defineEmits, defineProps, toRefs} from 'vue'
// import axios from '@/axios-common'

// let products = []
const emit = defineEmits(['openModal'])
const props = defineProps ({
    allOrders: Array,
    allProducts: Array,
})

const { allOrders } = toRefs(props)
const { allProducts } = toRefs(props)

// Hiermee geef ik een signaal aan de template om het modal te openen doormiddel van de functie openAddCustomers
function open() {
    emit('openModal', true)
}

// function getProducts(name) {
//     axios.get('/orders/' + name , {
//     headers: {
//         Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).headers.authorization
//     }
//     })
//     .then(response => (
//         products = response.data,
//         console.log(products),
//         console.log('dit werkt')
//     ))
//     .catch((error) => console.log(error.response.data))
// }


</script>
