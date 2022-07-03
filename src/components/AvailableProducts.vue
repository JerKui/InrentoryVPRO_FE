<template>
<div class="flex--1">
    <div class="productsHeader">
        <h1>Inventory</h1>
        <input type="text" v-model="input" placeholder="Search">
        <button @click="open">+ Add product</button>
    </div>
        <div class="filter" v-if="true">
            <button class="idb" @click="sortFilterId(value = !value)">Id</button>
            <button class="categoryb" @click="sortFilterCategory(value = !value)">Category</button>  
            <button class="productb" @click="sortFilterName(value = !value)">Product</button>  
            <button class="stockb" @click="sortStatus(value = !value)">Stock</button>  
        </div>
    <div class="productItem" v-for="(product) in searchFilterInput(input)" :key="product.id">
        <div class="productHeader">
            <div class="productItemContent">
                <div class="productItemContent_id">
                    # {{ product.id}}
                </div>
                <div class="productItemContent_category">
                    <div class="category" 
                    :class="
                    [product.productline.name === 'Camera' ? 'categoryblue' : 'category', 
                    product.productline.name === 'Microphone' ? 'categorymicrophone' : 'category',
                     product.productline.name === 'Harddrive' ? 'categoryharddrive' : 'category']
                    ">
                        {{ product.productline.name }}
                    </div>
                </div>
                <div class="productItemContent_name">
                    {{ product.name }}
                </div>
                <div class="productItemContent_stock">
                    <div class="stock">
                        {{ product.stock }}
                    </div>
                </div>
                <div class="productItemContent_edit">
                    <button @click="product.hide = !product.hide">Edit</button>
                </div>
                <div class="productItemContent_delete">
                    <button @click="deleteProduct(product.id)">Delete</button>
                </div>
            </div>
            <Transition name="nested" :duration="{ enter: 800, leave: 300 }">
            <div class="hide outer" v-show="product.hide">
            <div class="hideContent inner">
                <form form v-on:submit.prevent="updateProduct(product)">
                <div class="formspace">
                    <div class="hideContent_section1">
                        <div class="field">
                            <label>Product name
                            <input type="text" placeholder="Fill in the product name" v-model="product.name" required>
                            </label>
                        </div>
                        <div class="rightfield">
                        <div class="field">
                            <label>Product category
                                <select v-model="product.productline.name" required>
                                <option v-for="category in infoProduct" :value="category.name" :key="category.id"> {{category.name}} </option>
                                </select>
                            </label>
                        </div>
                        <div class="field">
                            <label>Product stock
                            <input type="number" placeholder="Fill in stock" v-model="product.stock" required>
                            </label>
                        </div>
                        </div>
                    </div>
                    <div class="button">
                        <button class="update">Update</button>
                        <button type="reset" class="cancel" @click="reloadPage">Cancel</button>
                    </div>
                </div>
                </form>
            </div>
            </div>
            </Transition>
        </div>
    </div>
    
</div>
</template>

<script setup>
import axios from '../axios-common'
import { defineEmits, defineProps, toRefs, ref } from 'vue'

const props = defineProps ({
    allProducts: Array,
})

// let status = ref();
const { allProducts } = toRefs(props)
// const { cancerMaagd } = toRefs(props)
const emit = defineEmits(['openAddProduct', 'updateProduct', 'deleteProduct'])
let input = ref('');

function deleteProduct(id) {
    if (confirm('Are you sure you want to delete this product?')) {
        emit('deleteProduct', id)
    }
}
function open() {
    emit('openAddProduct', true)
}

function reloadPage() {
    window.location.reload();
}

function sortFilterCategory () {
    allProducts.value.sort((a, b) => {
        if (a.productline.name < b.productline.name) {
            return -1;
        }
        if (a.productline.name > b.productline.name) {
            return 1;
        }
        return 0;
    })
}

function sortFilterId () {
    allProducts.value.sort((a, b) => {
        if (a.id < b.id) {
            return -1;
        }
        if (a.id > b.id) {
            return 1;
        }
        return 0;
    })
}

function sortFilterName() {
    allProducts.value.sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    })
}

function searchFilterInput(search) {
    return allProducts.value.filter(product => {
        return product.name.toLowerCase().includes(search.toLowerCase())
    })
}
</script>

<script>
export default {
    name: 'CompanyPage',
    data() {
        return {
            dataProduct: {
                id: '',
                name: '',
                description: '',
                image: '',
                stock: '',
                price: '',
                descriptionProductline: '',
            },
        }
    },
    methods: {
        isEditing() {
            this.data.isEditing = !this.data.isEditing
        },
        getProductLine() {
            axios.get('/productline', {
                headers: {
                    Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).headers.authorization
                }
            })
            .then(response => {
                this.infoProduct = response.data;
            })
            .catch((error) => console.log(error.response.data))
        },
        updateProduct(product) {
            if (confirm("Are you sure you want to update this product?")) {
                this.$emit('updateProduct', product)
                this.product.hide = !product.hide

            } else {
                window.location.reload()
            }
        }

    },
    mounted() {
        this.getProductLine()

    }  
}
</script>

<style scoped>
.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.3s ease-in-out;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  opacity: 0;
}

input, select {
  width: 100%;
  margin: 8px 0;
  box-sizing: border-box;
  border-radius: 0px;
  background-color: white;
  border-bottom: 1px solid #a5a8ab5e;
  color: black;
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
    transition: all 0.3s ease-in-out;
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

.filter {
    display: flex;
    width: 100%;
    height: 55px;
    gap: 12px;
}

.filter button {
    background: rgba(0, 0, 0, 0.027);
    border: #c5c5c541;
    color: rgba(0, 0, 0, 0.582);
    font-weight: 400;
}

.filter .idb {
    width: 5%;
}

.filter .categoryb {
    width: 10%;
}

.filter .productb {
    width: 60%;
}

.filter .stockb {
    width: 25%;
}
.productsHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 60px;
}
.productHeaderContent {
    display: flex;
    padding: 10px;
}

.productHeaderContent h3 {
    font-weight: 300;
}

.productHeaderContent_id {
    cursor:pointer;
    width: 5%
}

.productHeaderContent_category {
    cursor:pointer;
    width: 10%
}

.productHeaderContent_name {
    cursor:pointer;
    width: 60%
}

.productHeaderContent_stock {
    width: 10%
}

.productHeaderContent_edit {
    width: 7.5%
}

.productHeaderContent_delete {
    width: 7.5%
}
.productItemContent {
    background-color: #FAFAFA;
    padding: 16px;
    border: 1px solid #a5a8ab21;
}
.productItemContent_id, .productItemContent_category, .productItemContent_name, .productItemContent_stock, .productItemContent_edit, .productItemContent_delete {
    display: flex;
    align-items: center;
}
.productItemContent_id {
    color: #A5A8AB;
    font-weight: 200;
    width: 5%
}

.productItemContent_category {
    width: 10%
}

.category {
    background: rgba(230, 230, 230, 0.63);
    font-size: 12px;
    font-weight: 300;
    border-radius: 20px;
    padding-left: 6px;
    padding-right: 6px;
}
.categoryblue {
    background: rgba(0, 91, 228, 0.301);
    font-size: 12px;
    font-weight: 300;
    border-radius: 20px;
    padding-left: 6px;
    padding-right: 6px;
}

.categorymicrophone {
    background: rgba(228, 0, 0, 0.301);
    font-size: 12px;
    font-weight: 300;
    border-radius: 20px;
    padding-left: 6px;
    padding-right: 6px;
}

.categoryharddrive {
    background: rgba(27, 228, 0, 0.301);
    font-size: 12px;
    font-weight: 300;
    border-radius: 20px;
    padding-left: 6px;
    padding-right: 6px;
}

.productItemContent_name {
    width: 60%
}

.productItemContent_stock {
    width: 10%
}

.stock {
    width: 5%;
    height: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    border: 2px solid #F0F0F0;
    padding: 15px;
    font-size: 14px;
    font-weight: 500;
}

.productItemContent_edit {
    width: 7.5%
}

.productItemContent_delete {
    width: 7.5%
}


.productItemContent {
    padding-top: 6px;
    padding-bottom: 6px;
    display: flex;
    flex-direction: row;
}

.hideContent {
    border: 1px solid #F0F0F0;
    padding: 36px;
    padding-top: 18px;
    padding-bottom: 18px;
    margin-bottom: 8px;
}

.hide {
    width: 70%;
    background-color: #fafafa21
}

.formspace {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.hideContent_section1 {
    width: 100%;
    display: flex;
    gap: 25px;
    flex-direction: row;
}

.hideContent_section1 .field {
    width: 50%;
}

.rightfield{
    width: 50%;
    display: flex;
    gap: 12px;
}
.button {
    display: flex;
}
.button .update {
    width: 90%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background: rgba(0, 0, 0, 0.377);
    color: white;
    border: 0px;
    padding: 28px;
    border: 2px solid rgba(0, 0, 0, 0.034);
    border-radius: 0px;
}
.productItemContent {
    transition: all 0.3s ease-in-out;
}
.productHeader:hover .productItemContent { 
    background: #dddff55e;

}
</style>