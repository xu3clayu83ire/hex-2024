import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProductListView from '@/views/ProductListView.vue'

const router = createRouter({
    //history: createWebHistory(import.meta.env.BASE_URL),
    history: createWebHashHistory(),
    routes: [
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/productList',
        name: 'productList',
        component: ProductListView
      }
    ]
  })
  
  export default router