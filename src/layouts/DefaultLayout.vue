<template>
<div>
    <menu-page/>
  <slot/>  
</div>
</template>

<style scoped>
div {
    display: flex;
}
</style>

<script setup>
import MenuPage from '@/components/MenuPage'
</script>