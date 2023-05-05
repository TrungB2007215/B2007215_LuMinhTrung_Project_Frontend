import { createWebHistory, createRouter } from "vue-router";
import HomePage from '@/components/HomePage.vue'
import NotFound from '@/components/NotFound.vue'
import ProductList from '@/components/ProductList.vue'
import ProductDetail from '@/components/ProductDetail.vue'
import ProductAdd from '@/components/ProductAdd.vue'
import ProductEdit from '@/components/ProductEdit.vue'
import UserLogin from '@/components/UserLogin.vue'
import UserRegister from '@/components/UserRegister.vue'
import SearchResult from '@/components/SearchResult.vue'
import AdminProductList from '@/components/AdminProductList.vue'
import AdminLogin from '@/components/AdminLogin.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/products',
    name: 'ProductList',
    component: ProductList
  },
  {
    path: '/products/:id',
    name: 'ProductDetail',
    component: ProductDetail
  },
  {
    path: '/admin/product/add',
    name: 'ProductAdd',
    component: ProductAdd
  },
  {
    path: '/admin/product/edit/:id',
    name: 'ProductEdit',
    component: ProductEdit
  },
  {
    path: '/login',
    name: 'UserLogin',
    component: UserLogin
  },
  {
    path: '/register',
    name: 'UserRegister',
    component: UserRegister
  },
  {
    path: '/search',
    name: 'SearchResult',
    component: SearchResult
  },
  {
    path: '/admin/products',
    name: 'AdminProductList',
    component: AdminProductList
  },
  {
    path: '/admin/login',
    name: 'AdminLogin',
    component: AdminLogin
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router
