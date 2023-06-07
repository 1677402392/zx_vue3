<template>
    <div class="kiss">
        <div class="xlw"/>
        <div class="ztt"/>
        <div class="heart"/>
        <marquee scrollamount="3" class="Welcome">{{ greeting }}</marquee>
    </div>
    <div class="carousel">
        <el-carousel :interval="4000" type="card" height="600px" >
            <el-carousel-item v-for="item in faceImages" :key="item">
                <el-image :src="item" class="img"/>
            </el-carousel-item>
        </el-carousel>
    </div>
    <article class="forecast">
        <h1>Weather forecast for Seattle</h1>
        <article class="day-forecast">
            <h2>03 March 2018</h2>
            <p>Rain.</p>
        </article>
        <article class="day-forecast">
            <h2>04 March 2018</h2>
            <p>Periods of rain.</p>
        </article>
        <article class="day-forecast">
            <h2>05 March 2018</h2>
            <p>Heavy rain.</p>
        </article>
    </article>
</template>

<script>
export default {
    name: "Main",
    data() {
        return {
            //定义跑马灯的图片路径
            faceImages: [
                require("@/assets/lunbo/轮播 (1).jpg"),
                require("@/assets/lunbo/轮播 (2).jpg"),
                require("@/assets/lunbo/轮播 (3).jpg"),
                require("@/assets/lunbo/轮播 (4).jpg"),
                require("@/assets/lunbo/轮播 (5).jpg"),
            ],
            greeting: [
                "欢迎来到我们的博客",
                "沐风",
            ]
        }
    }
}

</script>

<style scoped>
.kiss{
    width: 100%;
    height:950px;
    position: relative;
    .Welcome{
        vertical-align: center;
        top: 30%;
        left: 40%;
        width: 20%;
        height: auto;
        position: absolute;
    }
    .xlw{
        background-image: url("../assets/img/ztt.jpg");
        background-size:cover;
        top: 35%;
        left: 55%;
        height: 90px;
        width: 90px;
        border-radius: 50%;
        position: absolute;
    }
    .ztt{
        background-image: url("../assets/img/xlw.jpg");
        background-size:cover;
        top: 35%;
        right: 55%;
        height: 90px;
        width: 90px;
        position: absolute;
        border-radius: 50%;
    }

    .heart{
        left: 48.5%;
        top: 38%;
        width: 64px;
        height: 64px;
        background: red;
        position: absolute;
        transform: rotate(45deg) scale(0.4);
        animation: heartBit 0.7s alternate infinite;
    }
    .heart::before {
        content: '';
        width: 64px;
        height: 64px;
        background: red;
        position: absolute;
        left: 0;
        top: -50px;
        border-radius: 50px 50px 0 0;
    }
    .heart::after {
        content: '';
        width: 64px;
        height: 64px;
        background: red;
        position: absolute;
        left: -50px;
        top: 0;
        border-radius: 50px 0 0 50px;
    }
    @keyframes heartBit {
        0% {
            transform: rotate(45deg) scale(0.3);
        }
        100% {
            transform: rotate(45deg) scale(0.5);
        }
    }
}
.carousel{
    padding-top: 1rem;
    width: auto;
    height: 600px;
    .img{
        height: 100%;
        object-fit: scale-down;
    }
}

.forecast {
    margin: 0;
    padding-top: 4rem;/*框内距*/
    font: 1rem 'Fira Sans', sans-serif;/*字体*/
}


.day-forecast {
    margin: 2rem;
    padding: 5rem;
    font-size: 1.2rem;
    -moz-background-image: url("../assets/img/1.jpg");
    background-color: white;
    /*background-repeat:no-repeat;*/
}

.day-forecast::before.day-forecast::after{
    width: 100%;
    height: 100%;
}

.day-forecast > p {
    padding-right: 5px;
    font-size: 1rem;
}
</style>
