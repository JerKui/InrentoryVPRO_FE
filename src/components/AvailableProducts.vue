<template>
<div class="flex--1">
    <div class="productsHeader">
        <h1>Inventory {{allProducts.name}}</h1>
        <button @click="open">+</button>
    </div>
    <div class="productHeader">
        <div class="productHeaderContent"><h3>ID</h3></div>
        <div class="productHeaderContent"><h3>Name</h3></div>
        <div class="productHeaderContent"><h3>Description</h3></div>
        <div class="productHeaderContent"><h3>Stock</h3></div>
        <div class="productHeaderContent"><h3></h3></div>
        <div class="productHeaderContent"><h3></h3></div>
    </div>
    <div class="productItem" v-for="(product) in allProducts" :key="product.id">
        <div class="productHeaderContentItem"><h3># {{product.id}}</h3></div>
        <div class="productHeaderContentItem"><h3>{{ product.name }}</h3></div>
        <div class="productHeaderContentItem"><h3>{{ product.description }}</h3></div>
        <div class="productHeaderContentItem"><h3>{{ product.stock }}</h3></div>
        <div class="productHeaderContentItem"><button>DELETE</button></div>
        <div class="productHeaderContentItem"><button>EDIT</button></div>
    </div>
    
</div>
</template>

<script setup>
import { defineEmits, defineProps, toRefs } from 'vue'

const props = defineProps ({
    allProducts: Array,
    // cancerMaagd: String,
})

const { allProducts } = toRefs(props)
// const { cancerMaagd } = toRefs(props)
const emit = defineEmits(['openAddProduct'])

function open() {
    emit('openAddProduct', true)
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
            }
        }
    },
    methods: {     
        getInformation(index) {
            console.log(index)
            this.dataProduct = index
        },
        deleteProduct() {
            this.$emit('deleteProduct', this.dataProduct.id)
        },

    },
}
</script>

<style scoped>
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
    gap: 24px;
  flex: 1 1 0%;
  overflow-x: hidden;
  padding: 48px;
}

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

.productsHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.productHeaderContent {
    display: flex;
    width: 20%;
}

.productHeaderContentItem button {
    width: 100%;
    padding: 0px;
}

.productHeaderContentItem {
    display: flex;
    align-items: center;
    width: 20%;
}

.productHeader {
    padding: 32px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: #FAFAFA;
    border: 1px solid #F0F0F0;
}

.productItem {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 12px 32px 12px 32px;
    border: 1px solid #F0F0F0;
    background: #FFFFFF;
}
</style>