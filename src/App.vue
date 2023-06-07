<template>
    <el-container id="app">
        <el-header height="50px">
            <nav>
                <router-link to="/">首页</router-link> |
                <router-link to="/login">登录</router-link>|
                <router-link to="/test">测试</router-link>|
                <router-link to="/test02">测试02</router-link>|
                <router-link to="/DHTML">动态</router-link>
            </nav>
        </el-header>
        <el-main>
            <router-view/>
        </el-main>
        <el-footer>
        </el-footer>
    </el-container>
</template>
<script>
export default {
    name : 'app',
    // created () {                                      //页面钩子函数:页面加载完成后触发
    //     setTimeout(() => {                             //定时器,created执行一秒后触发
    //         window.L2Dwidget.init({
    //             pluginRootPath: 'live2dw/',                 //指向你的目录
    //             pluginJsPath: 'lib/',                       //指向你的目录
    //             pluginModelPath: 'live2d-widget-model-z16/assets/',                                   //中间这个koharu就是你的老婆,想换个老婆,换这个就可以了
    //             tagMode: false,
    //             debug: false,
    //             model: { jsonPath: 'live2dw/live2d-widget-model-z16/assets/z16.model.json' },       //中间这个koharu就是你的老婆,想换个老婆,换这个就可以了
    //             display: { position: 'lefft', width: 200, height: 300 },                               //调整大小,和位置
    //             mobile: { show: true },                                                                //要不要盯着你的鼠标看
    //             log: false
    //         })
    //     }, 300)                                         //页面加载完成之后多久触发(好像是这个)
    // },

}
</script>
<style>

.el-container{
    padding: 0 !important;
    min-height: 100vh;
}
.el-header{
    padding: 0 !important;
}
.el-main{
    padding: 0 !important;
}
.el-footer{
    padding: 0 !important;
}

html,body,#app {
    height: 100%;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background-attachment: fixed;
    background-image: url('./assets/img/back.jpeg');
    background-repeat:no-repeat;
    background-size:100% 100%;
}
nav {
    padding: 15px;
}

nav a {  /*按下前的颜色*/
    font-weight: bold;
    color: dodgerblue;
}

nav a.router-link-exact-active { /*按下后的颜色*/
    color: orangered;
}

</style>
