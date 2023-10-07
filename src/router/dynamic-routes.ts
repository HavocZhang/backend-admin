import type { RouteRecordRaw } from "vue-router";
import { basicRouteMap } from "./router-modules";

export const ROOT_ROUTE_REDIRECT_PATH = "/dashboard";

const Layout = () => import("@/layouts/index.vue");

export const rootRoute: RouteRecordRaw = {
  path: "/",
  name: "rootPath",
  redirect: ROOT_ROUTE_REDIRECT_PATH,
  component: Layout,
  children: [],
};

export default [
  {
    path: "/dashboard",
    redirect: "/dashboard/analysis",
    name: "Dashboard",
    meta: {
      title: "仪表盘",
      icon: "DashboardOutlined",
    },
    component: basicRouteMap.RouteView,
    children: [
      {
        path: "analysis",
        name: "DashboardAnalysis",
        component: () => import("@/pages/dashboard/analysis/index.vue"),
        meta: {
          title: "分析页",
        },
      },
    ],
  },
] as RouteRecordRaw[];
