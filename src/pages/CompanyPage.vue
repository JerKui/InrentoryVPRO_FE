<template>
<default-layout>
    <company-component
    @openAddCompany="(options) => openAddCompanies(options)"
    @openEditCompany="(options) => getCompany(options)"
    :allCompanies="allCompanies"
    ></company-component>
    <company-popup
    :open="status"
    @closeAddCompany="(options) => closeAddCompanies(options)"
    @createCompany="(options) => createCompanies(options)"
    >
    </company-popup>
    <companyedit-popup
    :editCompany="editCompany"
    :open="editstatus"
    @closeEditCompany="(options) => closeEditCompanies(options)"
    @updateCompany="(options) => updateThisCompany(options)"
    >
    </companyedit-popup>
</default-layout>
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout'
import CompanyComponent from '@/components/CompanyComponent';
import CompanyPopup from '@/components/CompanyPopup';
import CompanyeditPopup from '@/components/CompanyeditPopup';
import axios from '@/axios-common'
import { ref, onMounted } from 'vue'

let status = ref(false)
let editstatus = ref(false)
let allCompanies = ref([])
let editCompany = ref()

function openAddCompanies(options) {
    status.value = options
}

function closeAddCompanies(options) {
    status.value = options
}

// function openEditCompanies(options) {
//     getCompanies(options)
//     editstatus.value = true
// }

function closeEditCompanies(options) {
    editstatus.value = options
}

onMounted(() => {
    getCompanies()
})

function getCompanies() {
    axios.get('/company', {
        headers: {
            Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).headers.authorization
        }
    })
    .then((response) => {
        allCompanies.value = response.data
    })
    .catch((error) => console.log(error.response.data))
}

function getCompany(id) {
    console.log(id)
    axios.get('/company/' + id , {
        headers: {
            Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).headers.authorization
        }
    })
    .then((response) => {
        editCompany.value = response.data
        editstatus.value = true
    })
    .catch((error) => console.log(error.response.data))
}

function createCompanies(options) {
    
    axios.post('/company', options, {
        headers: {
            Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).headers.authorization
        }
    })
    .then((response) => {
        if (response.status === 200) {
            allCompanies.value.push(response.data)
        } else {
            console.log(response.data)
        }
    })
    .catch((error) => console.log(error.response.data))
}

function updateThisCompany(options) {
    console.log(options)
    axios.put('/company/' + options.id, options, {
        headers: {
            Authorization: 'Bearer ' + JSON.parse(localStorage.getItem('user')).headers.authorization
        }
    })
    .then((response) => {
        if (response.status === 200) {
            // update the company in the list
            console.log(response.data)
            allCompanies.value.forEach((company, index) => {
                if (company.id === options.id) {
                    allCompanies.value[index] = response.data
                }
            })
        } else {
            console.log(response.data)
        }
    })
    .catch((error) => console.log(error.response.data))
}
</script>

<script>
</script>

<style scoped>
</style>