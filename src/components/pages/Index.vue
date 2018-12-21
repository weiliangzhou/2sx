<template>
    <el-container>
        <el-main>
            <el-carousel :interval="4000" height="220px">
                <el-carousel-item v-for="(banner,index) in bannerList" :key="index">
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
                             v-for="goods in goodsList">
                        <div class="aaa" v-bind:style="{backgroundImage:'url(' + goods.picUrl + ')'}"
                             @click="detail(goods.id)">
                            <div class="bbb" v-if="goods.isHot"></div>
                        </div>
                        <div style="margin: 10px ;flex: 1; overflow: hidden">
                            <div class="title-brief" @click="detail(goods.id)">
                                <h3> {{goods.name.substr(0,15)+'...'}}</h3>
                                <p style="color: #979797">{{goods.brief.substr(0,15)+'...'}}</p>
                            </div>
                            <div class="price-buy">
                                <span style="color: red;font-size: 20px " @click="detail(goods.id)">￥{{goods.retailPriceDesc}}</span>
                                <el-button round
                                           style="background-image: -webkit-gradient(linear, left top, right top, from(#f73d05), to(#fa0a11));position: absolute;right: 0;color: white">
                                    购买
                                </el-button>
                            </div>
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
                    console.log(err)
                })
                , this.$axios.post('/api/pub/goods/getGoodsList', {pageSize: 10, pageNum: 1})
                .then(res => {
                    console.log(res.data)
                    this.goodsList = res.data.data
                })
                .catch(err => {
                    console.log(err)
                })

        },
        methods: {
            detail(data) {
                this.$router.push({name: 'goods-detail', params: {id: data}});
            }
        }
    }
</script>
<style scoped>

    .aaa {
        margin: 10px;
        /*background: url("http://chuang-saas.oss-cn-hangzhou.aliyuncs.com/upload/image/20181207/f735acdbe63748d489af8ffb1164a72a.jpg");*/
        background-size: 100% 100%;
        width: 10rem;
        height: 90%;
        position: relative;
        border-radius: 9px;
        -webkit-border-radius: 9px;
        -moz-border-radius: 9px;
    }

    /**背景图片这里背景容器要写成相对位置*/
    .bbb {
        background: url("../../assets/rm.png");
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

    .price-buy {
        position: relative;
    }
</style>