<template>
<Dialog as="div" @close="close" :open="status">
<DialogPanel>
    <div class="backdrop">
        <div class="orderPopup">
            <div class="ui form">
            <div class="fields">
                <form form v-on:submit.prevent="postOrder"  @close="close">
                    <h2>+ Add order</h2>
                    <div class="field">
                        <label>Name
                        <input v-model="formOrder.name" type="text" placeholder="Name" required>
                        </label>
                    </div>
                    <div class="field">
                        <label>Return date
                        <input v-model="formOrder.returnDate" type="date">
                        </label>
                    </div>
                    <div class="field">
                        <label>Comments
                        <input v-model="formOrder.comments" type="textarea" placeholder="Fill in comment">
                        </label>
                    </div>
                    <div class="field">
                        <label for="genre">Add company
                        <select v-model="formOrder.company" required>
                        <option v-for="company in companies" :value="company.name" :key="company.id"> {{company.name}} </option>
                        </select>
                        </label>
                    </div>
                    <div class="button">
                        <button>Submit</button>
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
            this.$emit('createOrder', this.formOrder)
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

.orderPopup {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    padding: 24px;
}


h2 {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 1rem;
    color: black;
}
.circle {
    top: 140px;
    left: 590px;
}

.addCategory {
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 24px;
    background: #fff;
    background-blend-mode: overlay;
    border: 2px solid rgba(255, 255, 255, 0.027);
}
.addCategory button {
    justify-content: flex-end;
    width: 50px;
}
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

.form {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.labelContainer {
    display: flex;
    gap: 24px;
}

.labelContainer label {
    display: flex;
    flex-direction: column;
    gap: 6px;
}
.buttonContainer button {
    width: 100%;
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

</style>
