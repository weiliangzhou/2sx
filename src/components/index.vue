<template>
    <el-container>
        <!--<el-header>Header</el-header>-->
        <el-main>
            <el-carousel indicator-position="outside">
                <el-carousel-item v-for="item in 4" :key="item">
                    <h3>{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
        </el-main>
        <!--<el-footer>Footer</el-footer>-->
    </el-container>

</template>
<script>
    import NavList from './NavList'

    export default {
        name: "index",
        data() {
            return {}
        },
        components: {
            NavList
        }
    }
</script>
<style>

    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>