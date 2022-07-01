<template>
    <div class="flex--1">
        <div class="header">
            <h1>Companies</h1>
            <button @click="open">+ Add company</button>
        </div>
        <div v-for="company in allCompanies" :key="company.id">
        <button @click="openedit(company.id)">+ Edit company</button>  
        {{ company }}
        </div>
    </div>
</template>

<script setup>
import { defineEmits, defineProps, toRefs} from 'vue'

const emit = defineEmits(['openAddCompany', 'openEditCompany'])
const props = defineProps ({
    allCompanies: Array,
})

const { allCompanies } = toRefs(props)


function open() {
    emit('openAddCompany', true)
}

function openedit(options) {
    emit('openEditCompany', options)
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
h2 {
    color: red;
}

.flex--1 {
    display: flex;
    flex-direction: column;
    gap: 24px;
    flex: 1 1 0%;
    overflow-x: hidden;
    padding: 48px;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

</style>