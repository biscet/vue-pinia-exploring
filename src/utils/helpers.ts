import { createPinia } from "pinia";
import { components } from "../components/globals";
import router from "./router";
import { useAuthStore } from "../stores/auth";

const pinia = createPinia();

export function start(app) {
  components.forEach((component) => app.component(component.name, component));

  app.use(pinia).use(router).mount("#app");
}

router.beforeEach((to, _from, next) => {
  const { isAuth } = useAuthStore();

  if (to.meta.requiresAuth && !isAuth) {
    next({ name: "login", query: { redirect: to.fullPath } });
  } else {
    next();
  }
});
