import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false
Vue.use(Element)
Vue.use(VueLazyLoad, {
    preLoad: 1.3,
    error: 'error.jpeg',
    loading: 'loading.gif',
    attempt: 1
})
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
