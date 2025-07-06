import { defineStore } from "pinia";
import { reactive, toRefs } from "vue";
import { useRouter } from "vue-router";
import { PATHS } from "../utils/router";

export const useAuthStore = defineStore("auth", () => {
  const router = useRouter();

  const auth = reactive({
    email: "",
    password: "",
    isAuth: localStorage.getItem("isAuth") === "true",
  });

  function setIsAuth() {
    auth.isAuth = true;
    localStorage.setItem("isAuth", "true");
    router.replace(PATHS.APP);
  }

  function setIsGuest() {
    auth.isAuth = false;
    localStorage.setItem("isAuth", "false");
    router.replace(PATHS.LOGIN);
  }

  return { ...toRefs(auth), setIsAuth, setIsGuest };
});
