import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAddressBook, faHome, faPerson, faSearch, faSignOut, faUserSecret, faPlus, faTrashCan, faPencil, faX} from '@fortawesome/free-solid-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './routes/routes'
import { faProductHunt} from '@fortawesome/free-brands-svg-icons'

library.add(faUserSecret, faHome, faSearch, faProductHunt, faSignOut, faAddressBook, faPerson, faPlus, faTrashCan, faPencil, faX, fas, far, fab)

createApp(App)
.use(VueAxios, axios)
.use(router)
.use(createPinia())
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
