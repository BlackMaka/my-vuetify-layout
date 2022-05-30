import Vue from 'vue';
import VueRouter from 'vue-router';
//import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'DefaultLayout',
    component: () =>
      import(
        /* webpackChunkName: "DefaultLayout" */ '@/layouts/default/Index.vue'
      ),
    children: [
      {
        path: 'main',
        name: 'Main',
        component: () =>
          import(/* webpackChunkName: "main" */ '../views/main/Main.vue'),
      },
    ],
  },
  {
    path: '/product',
    name: 'Product',
    component: () =>
      import(
        /* webpackChunkName: "productLayout" */ '@/layouts/product/Index.vue'
      ),
    children: [
      {
        path: 'list',
        name: 'ProductList',
        component: () =>
          import(
            /* webpackChunkName: "products" */ '@/views/product/ProductList.vue'
          ),
      },
      {
        path: 'detail/:product_cd',
        name: 'ProductDetail',
        component: () =>
          import(
            /* webpackChunkName: "products" */ '@/views/product/ProductDetail.vue'
          ),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
