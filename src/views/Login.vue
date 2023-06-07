<template>
    <div class="login">
        <el-form :model="LoginInfo" :rules="rules" class="LoginForm" >
            <el-form-item label="账&nbsp&nbsp&nbsp&nbsp号:" >
                <input type="text" placeholder="请输入用户名" v-model="LoginInfo.userName">
            </el-form-item>
            <el-form-item label="密&nbsp&nbsp&nbsp&nbsp码:">
                <input type="passWord" placeholder="请输入密码" v-model="LoginInfo.passWord">
            </el-form-item>
            <el-form-item label="验证码:">
                <input type="text" placeholder="请输入验证码" v-model="LoginInfo.code"><br>
                <img alt="如果看不清楚，请单击图片刷新！" :src="codeImg" class="codeImg" @click="getCode()">
            </el-form-item>
            <el-form-item label="记住密码" prop="remember">
                <el-switch v-model="LoginInfo.remember"></el-switch>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('loginForm')">登陆</el-button>
                <el-button type="primary" @click="submitForm('register')">注册</el-button>
                <el-button type="primary" @click="submitForm('forget')">忘记密码</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name: "Login",
    data(){
        return{
            LoginInfo:{
                userName:'',
                passWord:'',
                code:'',
            },
            rules: {
                // 设置账户效验规则
                userName: [
                    {required: true, message: '请输入账户', trigger: 'blur'},
                    {min: 3, max: 10, message: '长度在 3 到 10 个字符的账户', trigger: 'blur'}
                ],
                // 设置密码效验规则
                passWord: [
                    {required: true, message: '请输入密码', trigger: 'blur'},
                    {min: 6, max: 15, message: '长度在 6 到 15 个字符的密码', trigger: 'blur'}
                ],
                // 设置验证码效验规则
                code: [
                    {required: true, message: '请输入验证码', trigger: 'blur'},
                    {min: 5, max: 5, message: '长度为 5 个字符', trigger: 'blur'}
                ]
            },
            codeImg:"http://localhost:8080/Common/code/image?time="+new Date(),
            // 记住密码
            remember: false,
        };
    },
    methods: {
        // 提交表单
        submitForm() {
            this.axios.post( "api/login/doLogin",this.LoginInfo).then(res=> {
                let Data = res.data;
                if (Data.code===200) {
                    // 表单验证成功
                    alert('登录成功')
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        getCode() {
            this.codeImg = "http://localhost:8082/Common/code/image?time="+new Date()
        },
    },

}
</script>

<style scoped>
.login{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    height: auto;
    width: 400px;
    background-color: #42b983;
    border-radius: 10%;
    overflow: hidden;
    /*opacity: 0.8;*/
}
.LoginForm{
    padding-left: 90px;
    padding-top: 30px;
    padding-bottom: 20px;
}
</style>