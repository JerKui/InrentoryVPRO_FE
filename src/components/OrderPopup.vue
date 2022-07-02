<template>
<Dialog as="div" @close="close" :open="status">
<DialogPanel>
    <div class="backdrop">
        <div class="orderPopup">
            <div class="ui form">
            <div class="fields">
                <form ref="addorder" form v-on:submit.prevent="postOrder"  @close="close">
                <div class="formContent">
                    <div class="header">
                        <h2>Add order</h2>
                        <h2 @click="close">x</h2>
                    </div>
                    <div class="email">
                        <label>Order name
                        <input v-model="formOrder.name" placeholder="Enter the name of the order" type="text" required/></label>   
                    </div>
                    <div class="password">
                        <label>Comment
                        <input v-model="formOrder.comments" placeholder="Add a comment to the order" type="text" required/></label>   
                    </div>
                    <div class="name">
                        <div class="firstName">
                            <label>Date
                            <input v-model="formOrder.returnDate" type="date" required/></label>
                        </div>
                        <div class="lastName">
                            <label for="genre">Company
                            <select v-model="formOrder.company" required>
                            <option v-for="company in companies" :value="company.name" :key="company.id"> {{company.name}} </option>
                            </select>
                            </label>
                        </div>
                    </div>
                    <button>Update company</button>        
                </div>
                </form>
            </div>
            </div>
        </div>
    </div>
</DialogPanel>
</Dialog>
</template>

<script setup>
import { Dialog, DialogPanel } from '@headlessui/vue'
import { defineProps, defineEmits, toRefs } from 'vue'
import axios from '../axios-common'

const props = defineProps({
    status: Boolean,
})

const emit = defineEmits(['closeModal', 'createOrder'])
const { status } = toRefs(props)

// Hiermee geef ik een signaal aan de template om het modal te sluiten doormiddel van de functie closeAddCustomers
function close() {
    emit('closeModal', false)
}
</script>

<script>
export default {
    data() {
        return {
            formOrder: {
                name: '',
                orderDate: new Date(),
                returnDate: '',
                status: 0,
                comments: '',
                company: '',
            }
        }
    },
    methods: {
        postOrder() {
            if (confirm('Are you sure you want to add this order?')) {
                this.$emit('createOrder', this.formOrder)
                this.$refs.addorder.reset();
                this.close();
            }
        },
        getCompanies() {
            axios.get('/company', {
                headers: {
                    Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).headers.authorization
                }
            })
            .then(response => {
                this.companies = response.data;
                console.log(this.companies)
            })
            .catch((error) => console.log(error.response.data))
        },
    },
    mounted() {
        this.getCompanies()
    }    
}
</script>


<style scoped>
.backdrop {
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    position: fixed;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
}
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f3f3f3;
}

.formDiv {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100vh;
    gap: 24px;
    background: #f3f3f3;
}

.formContent {
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: center;
}
.line {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
}
.linepart {
    height: 17.4%;
    display: flex;
    flex-direction: row;
    width: 1px;
    background: rgba(0, 0, 0, 0.11);
}

.loginContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 41.5vh;
    width: 15vw;
    padding: 24px;
}
.login {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
}

.login button {
    width: 100%;
}
.name {
    width: 100%;
    display: flex;
    gap: 15px;
}

.firstName, .lastName {
    width: 50%;
}

</style>
