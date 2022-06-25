<template>
<div class="containerMenu">
    <div class="line"></div>
    <div class="menuItems">
        <router-link to="'/" ><font-awesome-icon icon="fa fa-home"/></router-link>
        <router-link to="'/products"><font-awesome-icon icon="fa fa-search"/></router-link>
        <router-link to="'/customer"><font-awesome-icon icon="fa fa-person"/></router-link>
        <router-link to="'/company"><font-awesome-icon icon="fa fa-address-book"/></router-link>
        <router-link to="{path = '/login" v-on:click="logOut"><font-awesome-icon icon="fa fa-sign-out"/></router-link>
    </div>
</div>
</template>

<style scoped>

.line {
    position: absolute;
    width: 5px;
    height: 134px;
    left: calc(4% - 134px/2);
    top: 420px;
    bottom: 8px;

    background: rgba(255, 255, 255, 0.87);
    border-radius: 100px;
}
.containerMenu {
    display: flex;
    height: 100vh;
}

.menuItems {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 70px;
    width: 90px;
    background-color: #262450;
}

.menuItems a {
    font-size: 18px;
    color: #7B78AA;
}

.menuItems a:hover {
}

.router-link-active {
    color: #00D7FF !important;
    -webkit-filter: drop-shadow(0px 12px 7px rgba(255, 18, 18, 0.5));
    filter: drop-shadow(0px 0px 25px rgb(0, 213, 255)) !important;
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