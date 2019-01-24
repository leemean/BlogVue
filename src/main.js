import Vue from 'vue'
import App from './App'
import router from './router'
// import store from './store'

import axios from 'axios'
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
//import VueProgressBar from 'vue-progressbar'

Vue.config.productionTip = false

Vue.prototype.$http = axios

Vue.use(ElementUI)

//  Vue.use(VueProgressBar, {
//     color: '#29F',
//     failedColor: 'red',
//     thickness: '2px'
// })

new Vue({
    el: '#app',
    router,
    // store,
    // i18n,
    template: '<App/>',
    components: { App }
})