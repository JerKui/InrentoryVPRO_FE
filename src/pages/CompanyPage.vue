<template>
<div v-if="showAddCategory"><AddCategory @close="toggleAddCategory"/></div>
<div v-if="showAddProduct"><AddProduct @close="toggleAddProduct"/></div>
<div v-if="showEditProduct"><EditProduct @close="toggleEditProduct" :oneProduct="oneProduct"/></div>
<!-- <available-products @openEditProduct="(event) => openEditProduct(event)"></available-products> -->
<default-layout>
<div class="container">
    <!-- <button @click="toggleAddCategory" class="buttonCategory">
            <p>Add category</p>
        </button>
    <p @click="toggleAddProduct" class="buttonProduct">Add item</p> -->
    <div class="section1">
        <div class="section1_top">
            <h2> {{ productCount }}</h2>
            <h4 @click="showInformation()">Available products</h4>
            <div class="lightbar"></div>
        </div>
        <div class="section1_middle">     
            <div class="product" v-for="(product) in productData" :key="product.id" @click="getInformation(product)">
                <div class="product_left">
                    <div class="product_left_left">
                        <div class="productimage">
                            <font-awesome-icon icon="fa-solid fa-pencil"/>
                        </div>
                    </div>
                    <div class="product_left_right">
                        <h3>{{ product.name }}</h3>
                        <h4>{{ product.description }}</h4>
                    </div>
                </div>
                <div class="product_right">
                    <div class="product_right_content">
                        <h5> + {{ product.stock }}</h5>
                    </div>
                </div>
            </div>
        </div>
        <div class="section1_bottom">
            <font-awesome-icon icon="fa-solid fa-plus" class="test" @click="toggleAddProduct"/>
            <font-awesome-icon icon="fa-solid fa-trash-can" class="test" @click="deleteProduct"/>
            <font-awesome-icon icon="fa-solid fa-pencil" class="test" @click="toggleEditProduct"/>
            <div class="line"></div>
        </div>
    </div>
    <div class="section2">
        <div class="section1_top">
            <h2> {{ categoryCount }}</h2>
            <h4 @click="showInformation()">Available categories</h4>
            <div class="lightbar"></div>
        </div>
        <div class="section1_middle">     
            <div class="product" v-for="(category) in categoryData" :key="category.id" @click="getInformation(category)">
                <div class="product_left">
                    <div class="product_left_left">
                        <div class="productimage">
                            <font-awesome-icon icon="fa-solid fa-pencil"/>
                        </div>
                    </div>
                    <div class="product_left_right">
                        <h3>{{ category.description }}</h3>
                        <h4>{{ category.image }}</h4>
                    </div>
                </div>
                <div class="product_right">
                    <div class="product_right_content">
                        <h5> + {{ category.stock }}</h5>
                    </div>
                </div>
            </div>
        </div>
        <div class="section1_bottom">
            <font-awesome-icon icon="fa-solid fa-plus" class="test" @click="toggleAddCategory"/>
            <font-awesome-icon icon="fa-solid fa-trash-can" class="test" @click="deleteProduct"/>
            <font-awesome-icon icon="fa-solid fa-pencil" class="test" @click="toggleEditProduct"/>
            <div class="line"></div>
        </div>        
    </div>
    <div class="section3">
    </div>
</div>
</default-layout>
</template>

<script setup>
import { onMounted} from 'vue'
import DefaultLayout from '@/layouts/DefaultLayout'
// import AvailableProducts from '@/components/AvailableProducts'
import axios from '../axios-common'



onMounted(() => {
    axios.get('/product')
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.log(error)
        })
})

// function openEditProduct(e) {
//     console.log(e)
// }

</script>

<script>
import AddCategory from '../components/AddCategory'
import AddProduct from '../components/AddProduct'
import EditProduct from '../components/EditProduct'

export default {
    name: 'CompanyPage',
    components: { AddCategory, AddProduct, EditProduct },
    data() {
        return {
            productCount: null,
            categoryCount: null,
            productData: null,
            categoryData: null,
            selectedProduct: null,
            productColumns: ['id', 'name', 'description', 'image', 'stock', 'price', 'category'],
            test: null,
            showAddCategory: false,
            showAddProduct: false,
            showEditProduct: false,
            dataProduct: {
                id: '',
                name: '',
                description: '',
                image: '',
                stock: '',
                price: '',
                descriptionProductline: '',
            },
            data: {
                description: '',
                image: '',
            }
        }
    },
    methods: {
        updatePage() {
            this.$emit('update')
        },
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
                this.categoryData = response.data,
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
                this.productCount = Object.keys(response.data).length
            ))
            .catch((error) => console.log(error.response.data))
        },
        deleteProduct() {
            axios.delete('/product/' + this.dataProduct.id, {
                headers: {
                    Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).headers.authorization
                }
            })
            .then(response => (
                console.log(response.data),
                console.log(this.dataProduct),
                this.getProduct()
            ))
            .catch((error) => console.log(error.response.data), console.log(this.deletedProduct.id))
        },        
        toggleAddCategory() {
            this.showAddCategory = !this.showAddCategory
            this.getProduct()
            this.getProductLine()
        },
        toggleAddProduct() {
            this.showAddProduct = !this.showAddProduct
            this.getProduct()
            this.getProductLine()
        },
        toggleEditProduct() {
            this.showEditProduct = !this.showEditProduct
            this.getProduct()
            this.getProductLine()
        },
        getInformation(index) {
            this.dataProduct = index
        },
        showInformation() {
        }
    },
    mounted() {
        this.getProductLine()
        this.getProduct()
    }
}

</script>

<style scoped>
.circle1, .circle2, .circle3 {
    position: absolute;
    width: 293px;
    height: 275px;
    background: rgba(13, 166, 194, 0.3);
    filter: blur(100px);
    transition: all 2s ease;
    overflow: hidden;
}
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 122px
}
/* Section 1 styling */
.section1 {
    display: flex;
    flex-direction: column;
    width: 390px;
    height: 844px;
    background: #262450;
    border-radius: 50px;
    border: 2px solid rgba(255, 255, 255, 0.062);
}

.section1_top {
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    gap: 10px;
    width: 100%;
    height: 10%;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
}

.lightbar{
    width: 175px;
    height: 3px;
    left: 20px;
    top: 161px;

    background: #00D7FF;
    border-radius: 1px;
    filter: drop-shadow(0px 0px 25px rgb(0, 213, 255)) ;
}

.section1_middle {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 390px;
    height: 80%;
    overflow-y: scroll;
}

.section1_bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 70px;
    width: 390px;
    height: 10%;
    background: red;
    border-bottom-right-radius: 50px;
    border-bottom-left-radius: 50px;
    background: rgba(255, 255, 255, 0);
    background-blend-mode: overlay;
    backdrop-filter: blur(18px);
    border-top: 2px solid rgba(255, 255, 255, 0.062);
}

.test:hover {
    filter: drop-shadow(0px 0px 25px rgb(0, 213, 255)) !important;
    color: #00D7FF;
}

.test {
    font-size: 24px;
    color: #7B78AA;
    transition: all 0.3s ease;
}

.line {
    position: absolute;
    width: 134px;
    height: 3px;
    left: calc(50% - 134px/2);
    bottom: 8px;

    background: rgba(255, 255, 255, 0.87);
    border-radius: 100px;
}

.section2 {
    width: 390px;
    height: 844px;
    background: #262450;
    border-radius: 50px;
    border: 2px solid rgba(255, 255, 255, 0.062);
}

.product {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 330px;
    background-color: #19173D;
    border-radius: 50px;
    padding: 10px;
}

.product_left {
    display: flex;
    align-items: center;
    gap: 10px;
}

.product_left_left {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    background: rgba(255, 255, 255, 0.87);
    border-radius: 48px;
}

.product_right {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90px;
    height: 44px;
    border: 1px solid rgba(255, 255, 255, 0.171);
    border-radius: 20px;
}

.section3 {
    width: 390px;
    height: 844px;
    background: #262450;
    border-radius: 50px;
    border: 2px solid rgba(255, 255, 255, 0.062);
}
</style>