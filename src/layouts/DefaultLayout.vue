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

.main {
  background-color: yellow;
}
</style>

<script setup>
import MenuPage from '@/components/MenuPage'
</script>