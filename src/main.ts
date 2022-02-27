import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'g-design/src/components/index.less'
import gDesign from 'g-design'
//console.log(gDesign)
console.log(gDesign)


createApp(App).use(store).use(router).use(gDesign).mount('#app')
