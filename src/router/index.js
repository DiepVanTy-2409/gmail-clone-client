import { createRouter, createWebHistory } from 'vue-router'
import { DraftsView, InboxView, MailDetailView, SentView, SnoozedView, StarredView, LoginView, MainView } from '@/views'
import { useUserStore } from '@/store/user-store'

const routes = [
  {
    path: '/login',
    // redirect: '/inbox'
    beforeEnter: (to, from, next) => {
      useUserStore().email ? next('/') : next()
    },
    component: LoginView
  },
  {
    path: '/',
    beforeEnter: (to, from, next) => {
      useUserStore().email ? next() : next('/login')
    },
    component: MainView,
    redirect: '/inbox',
    children: [
      {
        path: '/inbox',
        component: InboxView,
      },
      {
        path: '/starred',
        component: StarredView
      },
      {
        path: '/snoozed',
        component: SnoozedView
      },
      {
        path: '/sent',
        component: SentView
      },
      {
        path: '/drafts',
        component: DraftsView
      },
      {
        path: '/mail/:mailId',
        component: MailDetailView
      },
    ]
  }


  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
