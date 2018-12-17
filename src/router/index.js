import Index from "../components/index";
import Course from "../components/course";
import Master from "../components/master";
import Vue from "vue";
import VueRouter from 'vue-router'
import Java from '../components/pages/java'
import Web from '../components/pages/web'
import LazyLoad from '../components/LazyLoad'

Vue.use(VueRouter)
export default new VueRouter({
    routes: [
        {path: "/", name: "index", component: LazyLoad},
        {
            path: "/course", name: "course", component: Course,
            // 默认
            redirect: "/course/java",
            children: [
                {path: "java", name: "java", component: Java},
                {path: "web", name: "web", component: Web}
            ]
        },
        {path: "/master", name: "master", component: Master}
    ]

})