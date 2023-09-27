import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import vue3GoogleLogin from 'vue3-google-login'


import App from './App.vue'
import router from './router'
import './assets/tailwind.css'


const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
app.use(vue3GoogleLogin, {
    clientId: '689212253208-bk10m8acrc3fo7tdfa042a0l9bduq7tt.apps.googleusercontent.com'
})
app.mount('#app')
