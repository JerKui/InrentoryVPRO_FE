<template>
<Dialog as="div" @close="close" :open="status">
<DialogPanel>
    <div class="backdrop">
        <div class="orderPopup">
            <div class="ui form">
            <div class="fields">
                <form form v-on:submit.prevent="postOrder"  @close="close">
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
            }
        }
    },
    methods: {
        postOrder() {
            this.$emit('createOrder', this.formOrder)
        }
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
}

</style>
