<template>
<div class="containerMenu">
    <div class="menuItems">
        <router-link to="'/" ><font-awesome-icon icon="fa fa-home"/></router-link>
        <router-link to="'/products"><font-awesome-icon icon="fa fa-search"/></router-link>
        <router-link to="'/customer"><font-awesome-icon icon="fa fa-person"/></router-link>
        <router-link to="'/company"><font-awesome-icon icon="fa fa-address-book"/></router-link>
        <router-link to="{path = '/login" v-on:click="logOut"><font-awesome-icon icon="fa fa-sign-out"/></router-link>
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

.router-link-active {
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