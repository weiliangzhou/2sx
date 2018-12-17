<template>
    <div><img v-lazy="imgObj"></div>
</template>
<script>
    export default {
        name: "lazy",
        data() {
            return {
                imgObj: {
                    src: require("../assets/11.jpg")
                    // error: require("../assets/error.jpeg"),
                    // loading: require("../assets/loading.gif")
                }


            }
        }

    }
</script>
<style>

</style>