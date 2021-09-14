import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '../views/Index.vue'

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/preview',
    name: 'Preview',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "preview" */ '../views/Preview.vue')
  }
]

const router = createRouter({
  // 在安卓本地加载，不支持 H5 history 模式
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
