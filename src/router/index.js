import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'

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
    meta: { auth: true },
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
    redirect: '/auth/login',
    component: () => import('@/layouts/AuthLayout.vue'),
    meta: { auth: false },
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
  routes
})

// Global before guards
router.beforeEach(async (to, _from, next) => {
  // Check if user is authenticated
  const recordsAuthenticated = to.matched.find((record) => record.meta?.auth === true)
  if (recordsAuthenticated && !store.getters['auth/isAuthenticated']) {
    next({ name: 'login' })
    return
  }

  // Check if user is not authenticated
  const recordsNotAuthenticated = to.matched.find((record) => record.meta?.auth === false)
  if (recordsNotAuthenticated && store.getters['auth/isAuthenticated']) {
    next({ name: 'users' })
    return
  }

  next()
})

export default router
