<template>
    <div class="nav-cla">
        <ul>
            <li>
                <router-link to="/" exact>首页</router-link>
            </li>
            <li>
                <router-link to="/course">课程</router-link>
            </li>
            <li>
                <router-link :to="{name:'master',params:{count:123,type:name}}">专家</router-link>

            </li>
        </ul>
    </div>

</template>
<script>
    export default {
        data() {
            return {
                name: {
                    name: "1111"
                }
            }
        }
    }

</script>
<style scoped>
    .nav-cla {
        width: 100%;
        height: 50px;
        background: #f1f1f1;
        line-height: 50px;
    }

    ul {
        list-style: none;
    }

    li {
        float: left;
        margin: 0 20px;
    }
</style>