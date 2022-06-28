<template>
    <div class="section1">
        <div class="section1_top">
            <h2> {{ allProducts.length }}</h2>
            <h4 @click="showInformation()"> {{ cancerMaagd }}</h4>
            <div class="lightbar"></div>
        </div>
        <div class="section1_middle">     
            <div class="product" v-for="(product) in allProducts" :key="product.id" @click="getInformation(product)">
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
            <font-awesome-icon icon="fa-solid fa-plus" class="test" @click="open"/>
            <font-awesome-icon icon="fa-solid fa-trash-can" class="test" @click="deleteProduct"/>
            <font-awesome-icon icon="fa-solid fa-pencil" class="test"/>
            <div class="line"></div>
        </div>
    </div>
</template>

<script setup>
import { defineEmits, defineProps, toRefs } from 'vue'

const props = defineProps ({
    allProducts: Array,
    cancerMaagd: String,
})

const { allProducts } = toRefs(props)
const { cancerMaagd } = toRefs(props)
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
</style>