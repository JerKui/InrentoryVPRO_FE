<template>
    <Dialog as="div" @close="close" :open="status">
    <DialogPanel>
        <div class="backdrop">
            <div class="form">
                <form ref="companyform" form v-on:submit.prevent="postCompany"  @close="close">
                <div class="formContent">
                    <div class="header">
                        <h2>Add company</h2>
                        <h2 @click="close">x</h2>
                    </div>
                    <div class="email">
                        <label>Company name
                        <input v-model="formCompany.name" placeholder="Enter the name of the company" type="text" required/></label>   
                    </div>
                    <div class="password">
                        <label>Address
                        <input v-model="formCompany.address" placeholder="Enter the address of the company" type="text" required/></label>   
                    </div>
                    <div class="name">
                        <div class="firstName">
                            <label>Postalcode
                            <input v-model="formCompany.postalcode" placeholder="Enter the postalcode" type="text" required/></label>
                        </div>
                        <div class="lastName">
                            <label>Phone number
                            <input v-model="formCompany.phone" placeholder="Enter the phone number" type="number" required/></label>   
                        </div>
                    </div>
                    <button>Create company</button>        
                </div>
                </form>
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
const { status } = toRefs(props)
const emit = defineEmits(['closeAddCompany', 'createCompany'])

function close() {
    emit('closeAddCompany', false)
}

</script>

<script>
export default {
    data() {
        return {
            formCompany: {
                name: '',
                phone: '',
                address: '',
                postalcode: '',
            }
        }
    },
    methods: {
        postCompany() {
            if (confirm('Are you sure you want to create this company?')) {
                this.$emit('createCompany', this.formCompany)
                this.$refs.companyform.reset();
                this.close();
            }
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