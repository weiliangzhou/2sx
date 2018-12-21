import Index from "../components/pages/Index";
import GoodsDetail from "../components/pages/GoodsDetail";
import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)
export default new VueRouter({
    routes: [
        {path: "/index", name: "index", component: Index},
        {
            path: "/goods/detail", name: "goods-detail", component: GoodsDetail
            // 默认
            // redirect: "/goods/detail"
            // children: [
            //     {path: "java", name: "java", component: Java},
            //     {path: "web", name: "web", component: Web}
            // ]
        },
        {
            path: "*",
            // 默认
            redirect: "/index"
            // children: [
            //             //     {path: "java", name: "java", component: Java},
            //     {path: "web", name: "web", component: Web}
            // ]
        }

    ]

})