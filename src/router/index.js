import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'main',
    component: ()=>import('@/views/Welcome.vue')
  },
  // {
  //   path: '/login',
  //   name: 'login',
  //   component:() =>import('@/views/LoginView.vue')
  // },
  // {
  //   path: '/register',
  //   name: 'register',
  //   component:() =>import('@/views/Register.vue')
  // },
  {
    path: '/test',
    name: 'test',
    component:() =>import('@/views/Test.vue')
  },
  {
    path: '/test02',
    name: 'test02',
    component:() =>import('@/views/Test02.vue')
  },
  {
    path: '/login',
    name: 'login',
    component:() =>import('@/views/Login.vue')
  },
  {
    path: '/DHTML',
    name: 'DHTML',
    component:() =>import('@/views/DHTML.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
