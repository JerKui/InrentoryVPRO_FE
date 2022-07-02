<template>
    <div class="flex--1">
        <div class="header">
            <h1>Orders</h1>
            <input type="text" v-model="input" placeholder="Search">
            <button @click="open">+ Add order</button>   
        </div>
        <div class="order" v-for="(order) in searchFilterInput(input)" :key="order">
            <div class="orderHeader">
                <div class="orderHeaderLeft">
                    <div class="orderHeader_item">
                        <h3>Order placed</h3>
                        <div> {{ convertDate(order.orderDate) }}</div>
                    </div>
                    <div class="orderHeader_item">
                        <h3>Total products</h3>
                        <div> {{ order.products.length }}</div>
                    </div>
                    <div class="orderHeader_item">
                        <h3>Order by</h3>
                        <div>{{ order.company.name }}</div>
                    </div>           
                    <div class="orderHeader_item">
                        <h3>Order status</h3>
                        <div class="statuscircle" :class="
                        [order.status === 0 ? 'statuscircle_pending' : 'statuscircle_done']">
                        </div>
                    </div>              
                </div>
                <div class="orderHeaderRight">
                    <div class="orderHeader_itemRight">
                        <h3>Order #{{ order.id }}</h3>
                        <div>Order Details</div>
                    </div> 
                </div>

            </div>
            <div class="orderContent">
                <div class="orderContentLeft">
                    <div>{{ order.name }}</div>
                    <div class="orderContentLeft_items" v-for="(product) in order.products" :key="product">
                        <div class="orderContentLeft_item">
                            <div class="itemcontent">
                                <div class="categorypiece">
                                    <div class="category" :class="
                                        [product.productline.name === 'Camera' ? 'categoryblue' : 'category', 
                                        product.productline.name === 'Microphone' ? 'categorymicrophone' : 'category',
                                        product.productline.name === 'Harddrive' ? 'categoryharddrive' : 'category']
                                    "> 
                                    {{ product.productline.name }}
                                    </div>
                                </div>                                
                                <div class="namepiece">
                                    {{ product.name }}
                                </div>
                                <div class="deletepiece" @click="deleteProductToOrder(product.name, order.name)">
                                    <button>Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="orderContentRight">
                        <select v-model="data.product">
                            <option v-for="(product) in filterAllProducts()" :key="product.name">{{ product.name }}</option>
                        </select>
                    <button class="closeButton" @click="addProductToOrder(order.name)">Add product</button>
                    <div class="buttons">
                       <button class="deleteButton" @click="deleteAnOrder(order.name)">Delete order</button>
                       <button class="completedButton" @click="deleteAnOrder(order.name)">Complete order</button> 
                    </div>
                </div>
            </div>
            <div class="orderFooter">
                <h3>Estimated return date:</h3>
                <div>{{ convertDate(order.returnDate) }}</div>
            </div>
        </div>
    </div>
</template>

<style scoped>

button p {
    color: white;
}


p, label {
    color: black;
}

input::placeholder {
    color: #A5A8AB;
}


button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    border: 2px solid #F0F0F0;
    padding: 28px;
    font-size: 14px;
    font-weight: 500;
    color: black;
    border-radius: 0px;
    cursor: pointer;
}
.flex--1 {
    display: flex;
    flex-direction: column;
    gap: 12px;
    overflow-x: hidden;
    padding: 48px;
}

select{
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 40px;
    border-bottom-color: #a5a8ab5e;
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
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    top: 0;
    gap: 60px;
}
.orderContentLeft_item {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 6px;
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
    border-bottom: 2px solid #F0F0F0;
    transition: all 0.3s ease-in-out;
}

.order:hover .orderHeader {
    background: #dddff55e;
}

.orderHeaderLeft  {
    display: flex;
    gap: 120px;
}

.orderHeaderLeft h3 {
    font-weight: 300;
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
    border-left: 1px solid #F0F0F0;
    border-right: 1px solid #F0F0F0;
    background: #fafafa21;
    gap: 24px;
}

.orderContentLeft {
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 70%;
}

.orderContentLeft_items {
    display: flex;
    flex-direction: column;
    background: #FAFAFA;
    padding: 6px 12px 6px 12px;
    border-bottom: 2px solid #F0F0F0;
    transition: all 0.3s ease-in-out;
}

.orderContentLeft_items:hover {
    background: #dddff55e;
}
.orderContentRight {
    width: 30%;
    display: flex;
    flex-direction: column;
}

.orderContentRight .closeButton {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #9E9E9E;
    border: 1px solid #F0F0F0;
    padding: 28px;

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
    background: #FAFAFA;
}

.itemcontent {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: center;
    transition: all 0.3s ease-in-out;
}
.categorypiece {
    display: flex;
    width: 10%;
}

.namepiece {
    display: flex;
    width: 80%;
}

.deletepiece {
    display: flex;
    justify-content: end;
    width: 10%;
}
.category {
    display: flex;
    justify-content: center;
    background: rgba(230, 230, 230, 0.63);
    font-size: 12px;
    font-weight: 300;
    border-radius: 20px;
    padding-left: 6px;
    padding-right: 6px;
}
.categoryblue {
    background: rgba(0, 91, 228, 0.301);
    justify-content: center;
    font-size: 12px;
    font-weight: 300;
    border-radius: 20px;
    padding-left: 6px;
    padding-right: 6px;
}

.categorymicrophone {
    background: rgba(228, 0, 0, 0.301);
    justify-content: center;
    font-size: 12px;
    font-weight: 300;
    border-radius: 20px;
    padding-left: 6px;
    padding-right: 6px;
}

.categoryharddrive {
    background: rgba(27, 228, 0, 0.301);
    justify-content: center;
    font-size: 12px;
    font-weight: 300;
    border-radius: 20px;
    padding-left: 6px;
    padding-right: 6px;
}

.buttons{
    width: 100%;
    display: flex;
}

.deleteButton{
    width: 50%;
}

.completedButton {
    width: 50%;
}

.statuscircle {
    width: 15px;
    height: 15px;
    background: black;
    border-radius: 16px;
}

.statuscircle_pending {
    background: orange;
    border-radius: 16px;
}
.statuscircle_done {
    background: greenyellow;
    border-radius: 16px;
}
</style>

<script setup>

import { defineEmits, defineProps, toRefs, ref} from 'vue'
// import axios from '@/axios-common'

// let products = []
const emit = defineEmits(['openModal', 'addProductOrder', 'deleteOrder', 'deleteProductOrder'])
const props = defineProps ({
    allOrders: Array,
    allProducts: Array,
})

const { allOrders } = toRefs(props)
let input = ref('');
const { allProducts } = toRefs(props)

// Hiermee geef ik een signaal aan de template om het modal te openen doormiddel van de functie openAddCustomers
function open() {
    emit('openModal', true)
}

function convertDate(date) {
    if (date === null) {
        return 'none'
    } else {
        let newDate = new Date(date)
        let day = newDate.getDate()
        let month = newDate.getMonth() + 1
        let year = newDate.getFullYear()
        return `${day}-${month}-${year}`
    }
}

function searchFilterInput(search) {
    return allOrders.value.filter(order => {
        return order.company.name.toLowerCase().includes(search.toLowerCase())
    })
}

function filterAllProducts() {
    // if stock === 0 then filter out
    return allProducts.value.filter(product => {
        return product.stock > 0
    })
}
</script>

<script>
export default {

    data() {
        return {
            search: '',
            data: {
                product: '',
                order: '',
            },
            deleteProduct: {
                product: '',
                order: '',
            }
        }
    },
    methods: {
        addProductToOrder(name) {
            
            this.data.order = name
            this.$emit('addProductOrder', this.data)
            this.allProducts.value.forEach(product => {
                if (product.name === name) {
                    if (product.stock === 0) {
                        this.allProducts.value.splice(this.allProducts.value.indexOf(product), 1)
                    }
                }
            })
        },
        deleteAnOrder(name) {
            if(confirm('Are you sure you want to delete this order?')) {
                this.$emit('deleteOrder', name)
            }
        },
        deleteProductToOrder(product, order) {
            this.deleteProduct.product = product
            this.deleteProduct.order = order
            this.$emit('deleteProductOrder', this.deleteProduct)
        }

    },
    mounted() {
    }, 
    computed: {
        filteredOrders() {
            console.log('test')
            return this.allOrders.filter(order => order.body.includes(this.search), console.log('test'))
        }
    }
}
</script>