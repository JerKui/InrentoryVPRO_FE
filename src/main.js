import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './routes/routes'

createApp(App)
.use(VueAxios, axios)
.use(router)
.use(createPinia())
.mount('#app')
