import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import router from '@/router'

let count = 0

router.beforeEach(async (to, _from, next) => {
  NProgress.start()
  const userStore = useUserStore()
  if (count === 0) {
    count += 1
    // 获取路由菜单的信息
    const currentRoute = await userStore.generateDynamicRoutes()
    router.addRoute(currentRoute)
    next({
      ...to,
      replace: true,
    })
    return
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})
