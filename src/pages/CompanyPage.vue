<template>
<div v-if="showAddCategory"><AddCategory @close="toggleAddCategory"/></div>
<div v-if="showAddProduct"><AddProduct @close="toggleAddProduct"/></div>
<default-layout>

    <div class="containerLeft">
        <div class="leftHeader">
            <div class="leftItemInfo">
                <p># of items stored</p>
                <h1> {{ productCount }}</h1>
            </div>
            <div class="leftItemInfo">
                <p># of categories stored</p>
                <h1> {{ categoryCount }}</h1>
            </div>
            <hr>
            <input type="text" placeholder="Search here">
            <hr>
            <div class="form">
                <table>
                    <thead>
                        <tr>
                            <th v-for="productColumn in productColumns" :key="productColumn.id"> {{ productColumn }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="products in productData" :key="products.id">
                            <td> #{{ products.id }} </td>
                            <td> {{ products.name }} </td>
                            <td> {{ products.description }} </td>
                            <td> {{ products.image }} </td>
                            <td> {{ products.stock }} </td>
                            <td> €{{ products.price }} </td>
                            <td> {{ products.productline.description }} </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <div class="containerRight">
        <div class="rightContent">
            <div class="rightButtons">
                <button @click="toggleAddCategory" class="buttonCategory">
                    <h4>Set up category</h4>
                    <p>Create new category</p>
                </button>
                <button @click="toggleAddProduct" class="buttonProduct">
                    <h4>Add new product</h4>
                    <p>Store an item</p>
                </button>
            </div>
            <hr>
            <!-- <div class="rightCategories">
                <h1>Top categories</h1>
                <div class="categories">
                    <div class="categoriesItem">
                        <font-awesome-icon icon="fa fa-sign-out"/>
                        <div class="categoriesItem_middle">
                            <h4>Memory Card</h4>
                            <p>115 items</p>
                        </div>
                    </div>
                    <div class="categoriesItem">
                        <font-awesome-icon icon="fa fa-sign-out"/>
                        <div class="categoriesItem_middle">
                            <h4>Memory Card</h4>
                            <p>115 items</p>
                        </div>
                    </div>
                    <div class="categoriesItem">
                        <font-awesome-icon icon="fa fa-sign-out"/>
                        <div class="categoriesItem_middle">
                            <h4>Memory Card</h4>
                            <p>115 items</p>
                        </div>
                    </div>
                    <div class="categoriesItem">
                        <font-awesome-icon icon="fa fa-sign-out"/>
                        <div class="categoriesItem_middle">
                            <h4>Memory Card</h4>
                            <p>115 items</p>
                        </div>
                    </div> 
                </div>                               
            </div> -->
            <hr>
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
h3 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
}
/* Styling left side */
.containerLeft {
    width: 70%;
    background-color: white;
}

.leftHeader {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 48px;
}
.leftItemInfo h1 {
    font-size: 64px;
}

table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
  width: 100%;
  table-layout: fixed ;
}

th {
    background-color: black;
    color: white;
}

th, td {
    padding: 16px;
}

/* Styling right side */
.containerRight {
    border-style: solid;
    border-right: 0;
    border-top: 0;
    border-bottom: 0;
    border-width: 4px;
    border-color: #F3F3F4;
    display: flex;
    flex-direction: column;
    width: 30%;
}

.rightContent { 
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 48px;
}

.rightButtons {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.rightButtons button {
    height: 80px;
}

.categories {
    padding-top: 24px;
    padding-bottom: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.categoriesItem p {
    font-weight: 300;
    font-size: 12px;
    color: #919191; 
}

.categoriesItem {
    display: flex;
    gap: 24px;
    justify-content: left;
    align-items: center;
}


/* Buttons Components */
</style>