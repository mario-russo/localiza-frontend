import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { Quasar } from 'quasar'

// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'
import '@quasar/extras/material-icons-round/material-icons-round.css'
import '@quasar/extras/material-symbols-outlined/material-symbols-outlined.css'
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css'

// Import Quasar css
import 'quasar/src/css/index.sass'
import router from './router'
import { createPinia } from 'pinia'



createApp(App).use(Quasar, {
    plugins: {}, // import Quasar plugins and add here
  }).use(router).use(createPinia()).mount('#app')
