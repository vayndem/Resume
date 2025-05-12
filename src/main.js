import './index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Import Font Awesome Core
import { library } from '@fortawesome/fontawesome-svg-core'

// Import Specific Icons
import { faUser } from '@fortawesome/free-solid-svg-icons'

// Import Font Awesome Vue Component
// eslint-disable-next-line no-unused-vars
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Add Icons to the Library
library.add(faUser)

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
