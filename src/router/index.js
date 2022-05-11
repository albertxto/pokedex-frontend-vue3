import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'

const ifAuthenticated = (_to, _from, next) => {
  if (store.getters['auth/isAuthenticated']) {
    next()
    return
  }
  next({ name: 'login' })
}

const ifNotAuthenticated = (_to, _from, next) => {
  if (!store.getters['auth/isAuthenticated']) {
    next()
    return
  }
  next({ name: 'users' })
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/pokedex/index.vue')
  },
  {
    path: '/admin',
    redirect: '/admin/users',
    component: () => import('@/layouts/AdminLayout.vue'),
    beforeEnter: ifAuthenticated,
    children: [
      {
        path: '/admin/profile',
        name: 'profile',
        component: () => import('@/views/admin/users/index.vue')
      },
      {
        path: '/admin/users',
        name: 'users',
        component: () => import('@/views/admin/users/index.vue')
      },
      {
        path: '/admin/users/add',
        name: 'usersAdd',
        component: () => import('@/views/admin/users/add.vue')
      },
      {
        path: '/admin/users/edit/:id',
        name: 'usersEdit',
        component: () => import('@/views/admin/users/edit.vue')
      }
    ]
  },
  {
    path: '/auth',
    component: () => import('@/layouts/AuthLayout.vue'),
    beforeEnter: ifNotAuthenticated,
    children: [
      {
        path: '/auth/login',
        name: 'login',
        component: () => import('@/views/auth/login/index.vue')
      },
      {
        path: '/auth/register',
        name: 'register',
        component: () => import('@/views/auth/register/index.vue')
      }
    ]
  },
  {
    path: '/pokedex',
    name: 'pokedex',
    component: () => import('@/views/pokedex/index.vue')
  },
  {
    path: '/pokedex/:id',
    name: 'pokedexInfo',
    component: () => import('@/views/pokedex/_id.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior () {
    // always scroll to top
    return { top: 0 }
  }
})

export default router
