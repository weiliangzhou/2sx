import Index from "../components/index";
import GoodsDetail from "../components/pages/GoodsDetail";

Vue.use(VueRouter)
export default new VueRouter({
    routes: [
        {path: "/", name: "index", component: Index},
        {
            path: "/goods/detail", name: "goods-detail", component: GoodsDetail,
            // 默认
            redirect: "/goods/detail"
            // children: [
            //     {path: "java", name: "java", component: Java},
            //     {path: "web", name: "web", component: Web}
            // ]
        }
    ]

})