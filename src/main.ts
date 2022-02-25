import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import gDesign from 'g-design'
import 'g-design/g-design.css'
//console.log(gDesign)
console.log(gDesign)


createApp(App).use(store).use(router).use(gDesign).mount('#app')
