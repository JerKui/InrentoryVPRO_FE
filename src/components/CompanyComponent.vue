<template>
    <div class="flex--1">
        <div class="header">
            <h1>Companies</h1>
            <button @click="open">+ Add company</button>
        </div>
        <div class="companywrap">
            <div class="companypopup" v-for="company in allCompanies" :key="company.id">
                <div class="companycontent">
                    <div class="companycontentdivided">
                    <h2>{{ company.name }}</h2>
                    </div>
                </div>
                <div class="companyinformation">
                    <div class="companyinfo">
                        <div class="content">
                            <h3>Address</h3>
                             <p>{{ company.address }}</p>  
                        </div>
                    </div>
                    <hr>
                    <div class="companyinfo">

                        <div class="content">
                            <h3>Postalcode</h3>
                             <p>{{ company.postalcode }}</p>  
                        </div>
                    </div>
                    <hr>
                    <div class="companyinfo">
                        <div class="content">
                            <h3>Phonenumber</h3>
                             <p>+ {{ company.phone }}</p>  
                        </div>
                    </div>
                    <button @click="openedit(company.id)">+ Edit company</button>  
                </div>
            </div>
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
    font-weight: 300;
    color: #A5A8AB;
}

p {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    color: black;
}
h2 {
    color: black;
    font-weight: 500;
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
.companywrap {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 24px;
    margin-bottom: 24px;
}

.companypopup {
    background-color: #FAFAFA;
    border-bottom: 2px solid #F3F3F4;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 24px;
    width: 20.55%;
    min-height: 42%;
    justify-content: space-between;
    transition: all 0.3s ease-in-out;
}

.companypopup:hover {
    background-color: #F2F3FB;
}

.companyinformation {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 6px;
}

.companyinfo {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
}
.icon {
    display: flex;
    justify-content: center;
    align-items: center;
}
.content {
    display: flex;
    flex-direction: column;

}
.companycontent{
    display: flex;
    flex-direction: column;
}


</style>