<template>

    <div>
        <NavList></NavList>
        <div class="left"> course
            <ul>
                <li>
                    <router-link to="/course/java">java</router-link>
                </li>
                <li>
                    <router-link to="/course/web">web</router-link>
                </li>
                <li> ios</li>
            </ul>
        </div>
        <div class="right">
            <router-view></router-view>

        </div>
    </div>
</template>
<script>
    import NavList from './NavList'

    export default {
        name: "course",
        data() {
            return {}
        },
        components: {
            NavList
        }
    }
</script>
<style scoped>
    .left, .right {
        float: left;
    }

    .right {
        margin-left: 50px;
    }
</style>