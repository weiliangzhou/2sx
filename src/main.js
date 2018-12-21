import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import Axios from 'axios'
import Qs from 'qs'
import 'element-ui/lib/theme-chalk/index.css'
import VueLazyLoad from 'vue-lazyload'
import router from './router'

Vue.prototype.$axios = Axios
Vue.use(Element, {size: 'small', zIndex: 3000})
Vue.config.productionTip = false
Vue.use(Element)
Vue.use(VueLazyLoad, {
    preLoad: 1.3,
    error: 'error.jpeg',
    loading: 'loading.gif',
    attempt: 1
})

Axios.defaults.baseURL = 'http://tmall.xc2018.com.cn/'
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

// 添加请求拦截器
Axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    if (config.method === 'post') {
        config.data = Qs.stringify(config.data)
    }
    return config
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
})

// 添加响应拦截器
Axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')




