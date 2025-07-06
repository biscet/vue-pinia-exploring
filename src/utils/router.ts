import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import AppLayout from "./layouts/AppLayout.vue";
import { LoginPage, TasksPage, NotFoundPage } from "../pages";

export const PATHS = {
  GENERAL: "",
  LOGIN: "/login",
  APP: "/app",
  TASKS: "tasks",
};

const routes = [
  {
    path: PATHS.LOGIN,
    name: PATHS.LOGIN.replace("/", ""),
    component: LoginPage,
  },
  {
    path: PATHS.APP,
    component: AppLayout,
    meta: { requiresAuth: true },
    children: [
      { path: PATHS.GENERAL, redirect: `${PATHS.APP}/${PATHS.TASKS}` },
      { path: PATHS.TASKS, name: PATHS.TASKS, component: TasksPage },
    ],
  },
  { path: "/:pathMatch(.*)*", name: "not-found", component: NotFoundPage },
] as RouteRecordRaw[];

const router = createRouter({
  routes,
  history: createWebHistory(PATHS.GENERAL),
});

export default router;
