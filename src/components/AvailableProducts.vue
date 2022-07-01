<template>
<div class="flex--1">
    <div class="productsHeader">
        <h1>Inventory</h1>
        <button @click="open">+ Add product</button>
    </div>
    <div class="productHeader">
        <div class="productHeaderContent">
            <div class="productHeaderContent_id">
                <h3>#</h3>
            </div>
            <div class="productHeaderContent_category">
                <h3>Category</h3>
            </div>
            <div class="productHeaderContent_name">
                <h3>Name</h3>
            </div>
            <div class="productHeaderContent_stock">
                <h3>Stock</h3>
            </div>
            <div class="productHeaderContent_edit">
                <h3>Edit</h3>
            </div>
            <div class="productHeaderContent_delete">
                <h3>Delete</h3>
            </div>
        </div>
        <hr>
    </div>
    <div class="productItem" v-for="(product) in allProducts" :key="product.id">
        <div class="productHeader">
            <div class="productItemContent">
                <div class="productItemContent_id">
                    # {{ product.id}}
                </div>
                <div class="productItemContent_category">
                    <div class="category">
                        {{ product.productline.name }}
                    </div>
                </div>
                <div class="productItemContent_name">
                    {{ product.name }}
                </div>
                <div class="productItemContent_stock">
                    {{ product.stock }}
                </div>
                <div class="productItemContent_edit">
                    edit
                </div>
                <div class="productItemContent_delete">
                    <h3 @click="product.hide = !product.hide">delete</h3>
                </div>
            </div>
            <div class="hide" v-show="product.hide">
            <div class="hideContent">
                <form form v-on:submit.prevent="updateProduct(product)">
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
                        <button type="submit" class="update">Update</button>
                        <button class="cancel" @click="product.hide = !product.hide">Cancel</button>
                    </div>
                </form>
            </div>
            </div>
        </div>
        <hr>
    </div>
    
</div>
</template>

<script setup>
import axios from '../axios-common'
import { defineEmits, defineProps, toRefs} from 'vue'

const props = defineProps ({
    allProducts: Array,
})

// let status = ref();
const { allProducts } = toRefs(props)
// const { cancerMaagd } = toRefs(props)
const emit = defineEmits(['openAddProduct', 'updateProduct'])

function open() {
    emit('openAddProduct', true)
}

// function changeStatus() {
//     status.value = !status.value;
//     console.log(status)
// }
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
            this.$emit('updateProduct', product)
            console.log(product)
        }

    },
    mounted() {
        this.getProductLine()

    }  
}
</script>

<style scoped>

input, select {
  width: 100%;
  margin: 8px 0;
  box-sizing: border-box;
  border-radius: 0px;
  background-color: white;
  border-bottom: 2px solid #A5A8AB;
  color: black;
}

button {
    display: flex;
    justify-content: start;
    align-items: center;
    background: #E08864;
    padding: 28px;
    border-radius: 0px;
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
}

select{
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    height: 40px;
    border-top: 2px solid #F0F0F0;
    border-bottom-color: #A5A8AB;
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

.productsHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.productHeaderContent {
    display: flex;
}

.productHeaderContent h3 {
    font-weight: 300;
}

.productHeaderContent_id {
    width: 5%
}

.productHeaderContent_category {
    width: 10%
}

.productHeaderContent_name {
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

.productItemContent_id {
    width: 5%
}

.productItemContent_category {
    width: 10%
}

.productItemContent_name {
    width: 60%
}

.productItemContent_stock {
    width: 10%
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
    background: #E08864;
    color: white;
    border: 0px;
    padding: 28px;
    border-radius: 0px;
}

.button .cancel {
    width: 10%;
    background: black;
    color: white;
    border: 0px;
    border-radius: 0px;
}
</style>