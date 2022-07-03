<template>
    <div class="flex--1">
        <div class="header">
            <h1>Orders</h1>
            <input type="text" v-model="input" placeholder="Search">
            <button @click="open">+ Add order</button>   
        </div>
        <Transition name="slide-fade">
        <div class="filter" v-if="this.show">
            <button @click="sortDate(value = !value)">Date</button>
            <button @click="sortProduct(value = !value)">Product</button>  
            <button @click="sortName(value = !value)">Company</button>  
            <button @click="sortStatus(value = !value)">Status</button>  
            <button @click="sortID(value = !value)">ID</button>  
        </div>
        </Transition>
        <div class="order" v-for="(order) in searchFilterInput()" :key="order">
            <div class="orderHeader" @click="order.hide = !order.hide" :class="
                        [order.status === 0 ? 'orderHeaderNeutral' : 'orderHeaderDone']">
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
                        <h3>Order name</h3>
                        <div> {{order.name}} </div>
                    </div>              
                </div>
                <div class="orderHeaderRight">
                    <div class="orderHeader_itemRight">
                        <h3>Order #{{ order.id }}</h3>
                        <div>Order Details</div>
                    </div> 
                </div>

            </div>
            <Transition name="nested" :duration="{ enter: 800, leave: 300 }">
            <div class="orderContent outer" v-show="!order.hide">
                <div class="orderContentLeft inner">
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
                       <button class="completedButton" @click="updateAnOrder(order.id)">Complete order</button> 
                    </div>
                </div>
            </div>
            </Transition>
            <div class="orderFooter">
                <div class="leftfooter">
                    <h3>Estimated return date:</h3>
                    <div>{{ convertDate(order.returnDate) }}</div>
                </div>
                <div class="rightFooter">
                    <h3>Order status</h3>
                    <div class="statuscircle" :class="
                    [order.status === 0 ? 'statuscircle_pending' : 'statuscircle_done']">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { defineEmits, defineProps, toRefs, ref} from 'vue'
// import axios from '@/axios-common'

// let products = []
const emit = defineEmits(['openModal', 'addProductOrder', 'deleteOrder', 'deleteProductOrder', 'updateStatus'])
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

function updateAnOrder(id) {
    if (confirm('Are you sure you want to update this order?')) {
        emit('updateStatus', id)
    }
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

function searchFilterInput() {
    if (this.input !== null ) {
        return allOrders.value.filter(order => {
        return order.company.name.toLowerCase().includes(this.input.toLowerCase())
        })
    }
}

function filterAllProducts() {
    // if stock is 0 product is not available remove from select
    return allProducts.value.filter(product => {
        return product.stock > 0
    })

}

function sortStatus (boolean) {
    // sort status with boolean
    if (boolean) {
        allOrders.value.sort((a, b) => {
            return a.status - b.status
        })
    } else {
        allOrders.value.sort((a, b) => {
            return b.status - a.status
        })
    }
}

function sortDate (boolean) {
    // sort returndate with boolean
    if (boolean) {
        allOrders.value.sort((a, b) => {
            return a.returnDate - b.returnDate
        })
    } else {
        allOrders.value.sort((a, b) => {
            return b.returnDate - a.returnDate
        })
    }
}

function sortProduct (boolean) {
    // sort by product count
    if (boolean) {
        allOrders.value.sort((a, b) => {
            return a.products.length - b.products.length
        })
    } else {
        allOrders.value.sort((a, b) => {
            return b.products.length - a.products.length
        })
    }
}

function sortID (boolean) {
    // sort by id
    if (boolean) {
        allOrders.value.sort((a, b) => {
            return a.id - b.id
        })
    } else {
        allOrders.value.sort((a, b) => {
            return b.id - a.id
        })
    }
}

function sortName (boolean) {
    // sort by name
    if (boolean) {
        allOrders.value.sort((a, b) => {
            return a.company.name.localeCompare(b.company.name)
        })
    } else {
        allOrders.value.sort((a, b) => {
            return b.company.name.localeCompare(a.company.name)
        })
    }
}
</script>

<script>
export default {

    data() {
        return {
            hide: false,
            show: true,
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
            this.filterAllProducts()
            this.order.hide = true
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

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.3s ease-in-out;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  opacity: 0;
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


button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    border: 1px solid #F0F0F0;
    padding: 28px;
    font-size: 14px;
    font-weight: 400;
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
    font-weight: 400;
    font-size: 52px;

}

h3 {
    font-weight: 300;
    color: #A5A8AB;
}

p {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    color: black;
}

.filter {
    display: flex;
    justify-content: space-between;
    width: 100;
    height: 48px;
    gap: 12px;
}

.filter button {
    width: 20%;
    background: rgba(0, 0, 0, 0.027);
    border:1px solid #c5c5c541;
    color: rgba(0, 0, 0, 0.582);
    font-weight: 400;
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
.order {
    transition: all 0.3s ease-in-out;
    border: 0px solid #dddff55e
}
.order:hover {
    mask-border-outset: 1px solid #dddff55e
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
    border-bottom: 1px solid #F0F0F0;
    transition: all 0.3s ease-in-out;
    border-top: 1px solid #F0F0F0;
    border-left: 1px solid #F0F0F0;
    border-right: 1px solid #F0F0F0;
}

.orderHeaderNeutral {
    background: rgba(255, 166, 0, 0.075);
}

.orderHeaderDone {
    background: rgba(0, 255, 34, 0.075);
}

.order:hover .orderHeader {
    background: #dddff55e;
}

.rightFooter, .leftfooter {
    display: flex;
    align-items: center;
    gap: 12px;
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
    padding: 6px 24px 6px 24px;
    border: 1px solid #F0F0F0;
    transition: all 0.3s ease-in-out;
}

.orderContentLeft_items:hover {
    background: #dddff55e;
}
.orderContentRight {
    width: 30%;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.orderContentRight .closeButton {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #9E9E9E;
    border: 1px solid #F0F0F0;
    padding: 28px;

    font-size: 14px;
    font-weight: 300;
    color: white;
    border-radius: 0px;
    cursor: pointer;
    background: rgba(0, 0, 0, 0.089);
    border:1px solid #c5c5c541;
    color: rgb(0, 0, 0);
    font-weight: 400;
}

.orderContentRight .deleteButton {
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    border-left: 1px solid #F0F0F0;
    border-top: 1px solid #F0F0F0;
    border-bottom: 1px solid #F0F0F0;
    padding: 28px;
    font-size: 14px;
    font-weight: 400;
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
    border-top: 0px;
    background: #fafafa0e;
    justify-content: space-between;
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
    gap: 12px;
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
    background: rgb(0, 207, 0);
    border-radius: 16px;
}
</style>
