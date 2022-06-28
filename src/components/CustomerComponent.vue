<template>
    <div class="flex--1">
        <div class="orders">
        <h1 @click="open">Orders +</h1>
           <div class="order">
            <div class="orderHeader">
                <h3>Header</h3>
            </div>
            <div class="orderContent">
                <h3>Content</h3>
                <h3>Content</h3>
                <h3>Content</h3>
            </div>
            <div class="orderFooter">
                <h3>ESTIMATED DELIVERY:</h3>
                <p>Nov 15, 2019</p>
            </div>
           </div>
        </div>
    </div>
</template>

<style scoped>
.containers {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    
    position: absolute;
}

.flex--1 {
  flex: 1 1 0%;
  overflow-x: hidden;
  padding: 48px;
}

.orders {
    display: flex;
    flex-direction: column;
}
.orderHeader {
    padding: 16px;
    display: flex;
    flex-direction: row;
    background: #FAFAFA;
    border: 1px solid #F0F0F0;
}
.orderContent {
    border: 1px solid #F0F0F0;
    background: #FFFFFF;
}

.orderFooter {
    padding: 16px;
    display: flex;
    flex-direction: row;
    border: 1px solid #F0F0F0;
    background: #FFFFFF;

}


</style>

<script setup>

// import { defineEmits, defineProps, toRefs } from 'vue'


// const emit = defineEmits(['openModal'])
// const props = defineProps ({
//     allOrders: Array,
// })

// const { allOrders } = toRefs(props)

// Hiermee geef ik een signaal aan de template om het modal te openen doormiddel van de functie openAddCustomers
// function open() {
//     emit('openModal', true)
// }


</script>
