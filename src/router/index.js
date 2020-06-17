import Vue from "vue";
import VueRouter from "vue-router";

const Video = () => import("../views/Video");

Vue.use(VueRouter);

const routes = [
  {
    path:"",
    redirect:'/video',
  },
  {
    path:"/video",
    component: Video,
  }
];

const router = new VueRouter({
  routes,
  mode: 'history', // 去掉url中多余的 #
});

export default router