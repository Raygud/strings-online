import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faEnvelope, faPhone, faBasketShopping, faArrowRight } from '@fortawesome/free-solid-svg-icons'


library.add(faEnvelope,faPhone,faBasketShopping, faArrowRight)

createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
