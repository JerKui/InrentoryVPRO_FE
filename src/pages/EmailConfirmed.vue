<template>
    <div class="confirm">
        <router-link to="/">click hier</router-link>
    </div>
</template>

<script setup>
import axios from '../axios-common'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute();

onMounted(() => {
  const tokenObj = route.query
  axios.get('/registration/confirm', {
    params: {
      token: tokenObj.token}
    })
  .then((res) => {
    console.log(res)
  })
  .catch((error) => console.log(error))
})

</script>

<style>

.confirm {
    height: 100vh;
    width: 100vw;
}

</style>