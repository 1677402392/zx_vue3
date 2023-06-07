<template>
  <el-container>
      <el-header>
          <router-link to="/">首页</router-link> |
          <router-link to="/login">登录</router-link>|
          <router-link to="/test">测试</router-link>|
          <router-link to="/test02">测试02</router-link>|
          <router-link to="/DHTML">动态</router-link>
      </el-header>
      <el-main>
          <router-view/>
      </el-main>
      <el-footer>
          Footer
      </el-footer>
  </el-container>
</template>

<script>
export default {
    name: "Test02",
}
</script>
<style>
.el-container{
    height: 100%;
    width: 100%;
    position: absolute;
}
.el-header{
    height: 5%;
    top:50px;
    background-color: #5b6c7d;
}
.el-main{
    background-color: #42b983;
}
.el-footer{
    background-color: wheat;
}
nav {
    padding: 15px;
    background-color: black;
}

nav a {  /*按下前的颜色*/
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active { /*按下后的颜色*/
    color: #42b983;
}
</style>