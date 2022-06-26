<template>
<default-layout>
<div class="container">

</div>
</default-layout>
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout'
</script>

<script>
export default { 
    data() {
        return {
            

        }
    },
    methods: {
        renderForm() {
            for (let i = 0; i < 365; i++) {
                console.log(i)
            }
        }
    },
    mounted() {
        this.renderForm();
    }
}
</script>
<style>
</style>