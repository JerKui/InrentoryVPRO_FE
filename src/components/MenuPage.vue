<template>
<div class="containerMenu">
    <div class="menuItems">
        <a href="/" class="active"><font-awesome-icon icon="fa fa-home"/></a>
        <a href="/"><font-awesome-icon icon="fa fa-search"/></a>
        <a href="/"><font-awesome-icon icon="fa fa-person"/></a>
        <a href="/"><font-awesome-icon icon="fa fa-address-book"/></a>
        <a href="/login" v-on:click="logOut"><font-awesome-icon icon="fa fa-sign-out"/></a>
    </div>
</div>
</template>

<style>
.containerMenu {
    display: flex;
    height: 100vh;
    background-color: #F7F7F7;
}

.menuItems {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    flex:1;
}

.menuItems a {
    display: flex;
    justify-content: center;
    gap: 24px;
    padding: 24px;
    transition: all 0.5s ease;
    color: #969696;
    font-size: 18px;
}

.menuItems a:hover {
    color: #363636 !important;
    background-color: #dfdfdf;
}

.active {
    color: #363636 !important; 
}

</style>

<script>
import { useAuthStore } from '../stores/authStore'

export default {
    name : 'MenuView',
    data() {
        return {
            form: {
                email: '',
                password: ''
            },
            message: ''
        }
    },
    setup() {
        const authStore = useAuthStore()
        return { authStore } 
    },
    methods: {
        logOut() {
            this.authStore.logout()
            .catch((error) => this.message = error.response.data)
        }
    }
}
</script>