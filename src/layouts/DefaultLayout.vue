<template>
<div class="container">
  <div class="containerMenu">
    <div class="menuItems">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <router-link class="router" to="'/" >
        <font-awesome-icon icon="fa-regular fa-map" />
        Dashboard
      </router-link>
      
      <router-link class="router" to="'/orders" >
        <font-awesome-icon icon="fa-regular fa-envelope" />
        Orders
      </router-link>
      
      <router-link class="router" to="'/inventory" >
        <font-awesome-icon icon="fa-regular fa-folder-open" />
        Inventory
      </router-link>

      <router-link class="router" to="'/companies" >
        <font-awesome-icon icon="fa-regular fa-id-card" />
        Companies
      </router-link>
          
        
    </div>
  </div>

  <div class="right-container">
    <slot />
  </div>

</div>
</template>

<style scoped>
.router {
  display: flex;
  align-items: center;
  gap: 24px;
}
/* DO NOT TOUCH! */
.container {
  display: flex;
  height: 100vh;
  flex-direction: row;
}

.right-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
}

/* CAN TOUCH! */
.containerMenu {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 375px;
  background-color: #FAFAFA;
  border-right: 1px solid #e5e5e5;
}

.menuItems {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  background: #FAFAFA;
}
.menuItems a {
  padding: 16px 16px 16px 42px;
  font-size: 13px;
  color: #636A6E;
}
.router {
  transition: all 0.3s ease-in-out;
}
.router:hover {
  background: #f3f3f3; 
  color: #222222 !important;
}

.router-link-active {
  background: #f3f3f3; 
  color: #222222 !important;
}
</style>

<script setup>

</script>