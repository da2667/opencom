import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from "../components/HomePage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/discussion',
    name: 'dicussion',
    component: HomePage
  },
  {
    path: '/friends',
    name: 'friends',
    component: HomePage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
