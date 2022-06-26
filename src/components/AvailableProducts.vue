<template>
    <button @click="open($event)">Click here</button>
</template>

<script setup>
import { defineEmits } from 'vue'

const emit = defineEmits(['openEditProduct'])
function open(e) {
    emit('openEditProduct', e)
}
</script>