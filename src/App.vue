<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name: 'app',
        data() {
            return {}
        }

    }

</script>
<style>
    .image {
        margin: 10px;
        width: 45%;
        height: 130px;
        border-radius: 9px;
        -webkit-border-radius: 9px;
        -moz-border-radius: 9px;
    }

    /**挡在前边的图，这里要是用相对位置我标红了*/
</style>
