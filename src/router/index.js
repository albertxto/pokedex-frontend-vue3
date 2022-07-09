import { createRouter, createWebHashHistory } from 'vue-router'
import store from '@/store'
import { roles as userRolesConfig } from '@/config/user'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/index.vue')
  },
  {
    path: '/admin',
    redirect: '/admin/dashboard',
    component: () => import('@/layouts/AdminLayout.vue'),
    meta: { auth: true },
    children: [
      {
        path: '/admin/dashboard',
        name: 'dashboard',
        component: () => import('@/views/admin/dashboard/index.vue')
      },
      {
        path: '/admin/favorite-pokemon',
        name: 'favoritePokemon',
        component: () => import('@/views/admin/favoritePokemon/index.vue')
      },
      {
        path: '/admin/profile',
        name: 'profile',
        component: () => import('@/views/admin/profile/index.vue')
      },
      {
        path: '/admin/users',
        name: 'users',
        component: () => import('@/views/admin/users/index.vue')
      }
    ]
  },
  {
    path: '/admin',
    redirect: '/admin/dashboard',
    component: () => import('@/layouts/AdminLayout.vue'),
    meta: { auth: [userRolesConfig.admin.value] },
    children: [
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
    path: '/pokedex/search',
    name: 'pokedexSearch',
    component: () => import('@/views/pokedex/search.vue')
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
  history: createWebHashHistory(),
  routes
})

// Global before guards
router.beforeEach(async (to, _from, next) => {
  // Check if user is authenticated
  const recordsAuthenticated = to.matched.find((record) => {
    return record.meta?.auth === true || Array.isArray(record.meta?.auth)
  })
  if (recordsAuthenticated && !store.getters['auth/isAuthenticated']) {
    next({ name: 'login' })
    return
  }

  // Check if user is authorized
  const recordsAuthorized = to.matched.find((record) => {
    return Array.isArray(record.meta?.auth) &&
      !record.meta.auth.includes(store.getters['auth/currentUserRole'])
  })
  if (recordsAuthorized) {
    next({ name: 'dashboard' })
    return
  }

  // Check if user is not authenticated
  const recordsNotAuthenticated = to.matched.find((record) => record.meta?.auth === false)
  if (recordsNotAuthenticated && store.getters['auth/isAuthenticated']) {
    next({ name: 'dashboard' })
    return
  }

  next()
})

export default router
