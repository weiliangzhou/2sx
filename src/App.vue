<template>
    <el-container>
        <el-main>
            <el-carousel :interval="4000" height="220px">
                <el-carousel-item v-for="banner in bannerList">
                    <img width="100%" height="100%" :src="banner.imageUrl"/>
                </el-carousel-item>
            </el-carousel>
            <el-row>
                <img width="100%"
                     src="http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181213/f83df59d8eac4bda80bf27cdb4ffa119.png"/>
            </el-row>
            <el-row>
                <el-col>
                    <el-card shadow="always" :body-style="{height:'150px',padding:0,display:'flex'}"
                             v-for="goods in goodsList" @click="detail(goods.id)">
                        <div class="aaa">
                            <div class="bbb"></div>
                        </div>
                        <div style="margin: 10px">
                            <h3> {{goods.name}}}</h3>
                            <p style="color: #979797">{{goods.brief}}}</p>
                            <span style="color: red;font-size: 25px ">￥{{goods.retailPriceDesc}}</span>
                            <el-button round
                                       style="background-image: -webkit-gradient(linear, left top, right top, from(#f78160), to(#fa3f43))">
                                购买
                            </el-button>
                        </div>
                    </el-card>
                </el-col>
            </el-row>


        </el-main>
        <!--<el-footer>Footer</el-footer>-->
    </el-container>
    <router-view></router-view>

</template>
<script>
    export default {
        name: "index",
        data() {
            return {
                bannerList: [],
                goodsList: []

            }
        },
        created() {
            this.$axios.get('/api/auth/banner/getBannerList')
                .then(res => {
                    console.log(res.data)
                    this.bannerList = res.data
                })
                .catch(err => {
                    console.log(error)
                })
                , this.$axios.post('/api/pub/goods/getGoodsList', {pageSize: 10, pageNum: 1})
                .then(res => {
                    console.log(res.data)
                    this.goodsList = res.data
                })
                .catch(err => {
                    console.log(error)
                })
            r

        },
        methods: {
            detail(data) {
                this.$router.push({name: 'goods-detail', params: {id: data}});
            }
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

    .aaa {
        margin: 10px;
        background: url("http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181207/f735acdbe63748d489af8ffb1164a72a.jpg");
        background-size: 100% 100%;
        width: 90%;
        height: 90%;
        position: relative;
        border-radius: 9px;
        -webkit-border-radius: 9px;
        -moz-border-radius: 9px;
    }

    /**背景图片这里背景容器要写成相对位置*/
    .bbb {
        background: url("./assets/rm.png");
        background-size: 100% 100%;
        width: 30%;
        height: 45px;
        position: absolute;
        top: 0px;
        left: 0px;
        border-radius: 9px;
        -webkit-border-radius: 9px;
        -moz-border-radius: 9px;
    }

    * {
        padding: 0;
        margin: 0;
    }

    /**挡在前边的图，这里要是用相对位置我标红了*/
</style>
<template>
    <el-container>
        <el-main>
            <el-carousel :interval="4000" height="220px">
                <el-carousel-item v-for="banner in bannerList">
                    <img width="100%" height="100%" :src="banner.imageUrl"/>
                </el-carousel-item>
            </el-carousel>
            <el-row>
                <img width="100%"
                     src="http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181213/f83df59d8eac4bda80bf27cdb4ffa119.png"/>
            </el-row>
            <el-row>
                <el-col>
                    <el-card shadow="always" :body-style="{height:'150px',display:'flex'}"
                             v-for="goods in goodsList">
                        <div class="aaa" v-bind:style="{backgroundImage:'url(' + goods.picUrl + ')'}">
                            <div class="bbb"></div>
                        </div>
                        <div style="margin: 10px">
                            <h4> {{goods.name.split('】')[0]+'】'}}</h4>
                            <p style="color: #979797">{{goods.brief}}}</p>
                            <span style="color: red">{{goods.retailPriceDesc}}</span>
                            <el-button round
                                       style="background-image: -webkit-gradient(linear, left top, right top, from(#f78160), to(#fa3f43))">
                                购买
                            </el-button>
                        </div>
                    </el-card>
                </el-col>
            </el-row>


        </el-main>
        <!--<el-footer>Footer</el-footer>-->
    </el-container>

</template>
<script>
    export default {
        name: "index",
        data() {
            return {
                bannerList: [],
                goodsList: []

            }
        },
        created() {
            this.$axios.get('/api/auth/banner/getBannerList')
                .then(res => {
                    console.log(res.data)
                    this.bannerList = res.data.data
                })
                .catch(err => {
                    console.log(error)
                })
                , this.$axios.post('/api/pub/goods/getGoodsList', {pageSize: 10, pageNum: 1})
                .then(res => {
                    console.log(res.data)
                    this.goodsList = res.data.data
                })
                .catch(err => {
                    console.log(error)
                })

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

    .aaa {
        margin: 10px;
        /*background: url("http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181207/f735acdbe63748d489af8ffb1164a72a.jpg");*/
        background-size: 100% 100%;
        width: 90%;
        height: 90%;
        position: relative;
        border-radius: 9px;
        -webkit-border-radius: 9px;
        -moz-border-radius: 9px;
    }

    /**背景图片这里背景容器要写成相对位置*/
    .bbb {
        background: url("./assets/rm.png");
        background-size: 100% 100%;
        width: 30%;
        height: 45px;
        position: absolute;
        top: 0px;
        left: 0px;
        border-radius: 9px;
        -webkit-border-radius: 9px;
        -moz-border-radius: 9px;
    }

    /**挡在前边的图，这里要是用相对位置我标红了*/
</style>