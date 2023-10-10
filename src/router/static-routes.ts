import type { RouteRecordRaw } from 'vue-router'

export default [
  {
    path: '/login',
    component: () => import('@/pages/login/index.vue'),
  },
  {
    path: '/terms',
    children: [
      {
        path: 'license',
        component: () => import('@/pages/terms/license.vue'),
      },
      {
        path: 'privacy',
        component: () => import('@/pages/terms/privacy.vue'),
      },
    ],
  },
  {
    path: '/401',
    name: 'Error401',
    component: () => import('@/pages/exception/401.vue'),
  },
  {
    path: '/:pathMatch(.*)',
    component: () => import('@/pages/exception/not-found.vue'),
  },
] as RouteRecordRaw[]
