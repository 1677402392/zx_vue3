import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/*导入ElementUI*/
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

/*导入axios*/
// import axios from "axios";
// import VueAxios from "vue-axios";
//
// axios.defaults.baseURL = 'https//localhost:8082'
// app.provide('$axios', axios)

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')

