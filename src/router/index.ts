/*
 * @Descripttion: 神之一手
 * @version: 1.0.0
 * @Author: null
 * @Date: 2022-08-15 10:01:21
 * @LastEditors: sueRimn
 * @LastEditTime: 2022-08-15 10:47:03
 */
const Home = { template: "<div>Home</div>" };
import UseCopy from "../components/UseCopy.vue";
import UseMousePosition from "../components/UseMousePosition.vue";
import UseScrollPosition from "../components/UseScrollPosition.vue";
import UseDeepCopy from "../components/UseDeepCopy.vue";
import UseSleep from "../components/UseSleep.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: UseMousePosition },
  { path: "/useCopy", component: UseCopy },
  { path: "/useMousePosition", component: UseMousePosition },
  { path: "/useScrollPosition", component: UseScrollPosition },
  { path: "/useDeepCopy", component: UseDeepCopy },
  { path: "/useSleep", component: UseSleep },
];

const router = createRouter({
  // linkActiveClass: "active",
  history: createWebHistory(),
  routes,
});

export default router;
