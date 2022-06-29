<template>
<div class="container">
  <div class="containerMenu">
    <div class="menuItems">
      
      <router-link to="'/" >
        <font-awesome-icon icon="fa fa-home" />
        Dashboard
      </router-link>
      
      <router-link to="'/products" >
        <font-awesome-icon icon="fa fa-home"/>
        Products
      </router-link>

      <router-link to="'/" >
        <font-awesome-icon icon="fa fa-home"/>
        Orders
      </router-link>

      <router-link to="'/customer" >
        <font-awesome-icon icon="fa fa-home"/>
        Customers
      </router-link>
          
        
    </div>
  </div>

  <div class="right-container">
    <slot />
  </div>

</div>
</template>

<style scoped>

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
  background-color: #fff;
  border-right: 1px solid #e5e5e5;
}

.menuItems {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  background: #fff;
}
.menuItems a {
  padding: 16px 16px 16px 42px;
  font-size: 13px;
  color: #636A6E;
  transition: all 0.3s ease;
}

.router-link-active {
  background: #FBF3F0;
  border-top-right-radius: 50px;  
  border-bottom-right-radius: 50px;  
  color: #E18965 !important;
}
</style>

<script setup>

</script>