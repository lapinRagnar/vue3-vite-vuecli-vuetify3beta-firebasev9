import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Team from '@/views/Team.vue'
import Project from '@/views/Project.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home'
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
