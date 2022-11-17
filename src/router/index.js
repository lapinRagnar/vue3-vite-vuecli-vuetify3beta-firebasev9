import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '@/views/Dashboard.vue'
import Team from '@/views/Team.vue'
import Project from '@/views/project/Project.vue'
import Signup from '@/views/auth/Signup.vue'
import Login from '@/views/auth/Login.vue'
import ProjectsByPerson from '@/views/project/ProjectsByPerson.vue'
import EditProject from '@/views/project/EditProject.vue'


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
      path: '/project/:id',
      name: 'editProject',
      component: EditProject,
      meta: {
        title: 'Project Detail'
      }
    },
    {
      path: '/projects/:id',
      name: 'projectsByPerson',
      component: ProjectsByPerson,
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

    // authentication
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        title: 'Login'
      }
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup,
      meta: {
        title: 'Sign Up'
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
