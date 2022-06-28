<template>
<div class="container">
    <div class="containerMenu">
        <!-- <div class="line"></div> -->
        <div class="menuItems">
            <router-link to="'/" ><font-awesome-icon icon="fa fa-home"/></router-link>
            <router-link to="'/products"><font-awesome-icon icon="fa fa-search"/></router-link>
            <router-link to="'/customer"><font-awesome-icon icon="fa fa-person"/></router-link>
            <router-link to="'/company"><font-awesome-icon icon="fa fa-address-book"/></router-link>
            <router-link to="{path = '/login" v-on:click="logOut"><font-awesome-icon icon="fa fa-sign-out"/></router-link>
        </div>
    </div>
    <div class="right-container">
      <slot />
    </div>
</div>
</template>

<style scoped>
.container {
  display: flex;
  height: 100vh;
  flex-direction: row;
  box-sizing: border-box;
}


.right-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
}

.total {
    display: flex;
}
.circle {
    top: 300px;
    left: -300px;
}
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
    height: 100vh;
    width: 90px;
}

.menuItems {
    display: flex;
    height: 100vh;
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
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    transition: all 0.3s ease;
}

.menuItems a:hover {
    filter: drop-shadow(0px 0px 25px rgb(0, 213, 255)) !important;
    color: #00D7FF;
    padding-left: 18px;
}

.router-link-active {
    color: #00D7FF !important;
    filter: drop-shadow(0px 0px 25px rgb(0, 213, 255)) !important;
}
</style>

<script setup>

</script>