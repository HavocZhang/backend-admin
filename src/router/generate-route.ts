import dynamicRoutes, { rootRoute } from "@/router/dynamic-routes";
export const generateRoutes = () => {
  const routerData = shallowRef();
  routerData.value = {
    ...rootRoute,
    children: dynamicRoutes,
  };
  return routerData.value;
};
