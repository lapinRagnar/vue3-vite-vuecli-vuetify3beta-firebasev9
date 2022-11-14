import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/views/Dashboard.vue'
import Team from '@/views/Team.vue'
import Project from '@/views/Project.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        title: 'Dashboard'
      }
    },
    {
      path: '/project',
      name: 'project',
      component: Project,
      meta: {
        title: 'Project'
      }
    },
    {
      path: '/project/:titre',
      name: 'projectId',
      component: Project,
      meta: {
        title: 'Project Detail'
      }
    },
    {
      path: '/team',
      name: 'team',
      component: Team,
      meta: {
        title: 'Team'
      }
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: 'About'
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Tuto Vuetify`
  next()
})

export default router
