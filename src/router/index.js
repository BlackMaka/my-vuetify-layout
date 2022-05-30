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
        path: '/main',
        name: 'Main',
        component: () =>
          import(/* webpackChunkName: "main" */ '../views/main/Main.vue'),
      },
      {
        path: '/products',
        name: 'Products',
        component: () =>
          import(
            /* webpackChunkName: "products" */ '../views/product/ProductList.vue'
          ),
      },
      {
        path: '/product-detail/:id',
        name: 'ProductDetail',
        component: () =>
          import(
            /* webpackChunkName: "products" */ '../views/product/ProductDetail.vue'
          ),
      },
    ],
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
