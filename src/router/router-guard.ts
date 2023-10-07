import router from "@/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { generateRoutes } from "./generate-route";
let count = 0;

router.beforeEach((to, _from, next) => {
  NProgress.start();
  if (count === 0) {
    const currentRoute = generateRoutes();
    router.addRoute(currentRoute);
    count += 1;
    next({
      ...to,
      replace: true,
    });
    return;
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});
