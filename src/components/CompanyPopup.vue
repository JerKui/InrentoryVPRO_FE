<template>
    <Dialog as="div" @close="close" :open="status">
    <DialogPanel>
        <div class="backdrop">
            <div class="form">
                <form form v-on:submit.prevent="postCompany"  @close="close">
                    <h2>+ Add company</h2>
                    <div class="field">
                        <label>Company name
                        <input type="text" placeholder="Fill in name of the company" v-model="formCompany.name" required>
                        </label>
                    </div>
                    <div class="field">
                        <label>Phone
                        <input type="text" placeholder="Fill in phonenumber" v-model="formCompany.phone" required>
                        </label>
                    </div>
                    <div class="field">
                        <label>Address
                        <input type="text" placeholder="Fill in address" v-model="formCompany.address" required>
                        </label>
                    </div>
                    <div class="field">
                        <label>Postalcode
                        <input type="text" placeholder="Fill in postal" v-model="formCompany.postalcode" required>
                        </label>
                    </div>
                    <div class="button">
                        <button>Add company</button>
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
            this.$emit('createCompany', this.formCompany)
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

.form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
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
  padding: 12px 20px;
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



</style>