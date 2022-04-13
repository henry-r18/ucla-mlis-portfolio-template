/** This is the Vue router index file, where you configure all the routes for your app.
 * Each route loads a view corresponding to the URI path being targeted.
 * A route is set up for each of the required components of the MLIS portfolio
 * (the About route is intended for the Professional Development Statement
 * and anything else about your portfolio you might want to add.)
**/

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/issue-paper',
    name: 'IssuePaper',
    component: () => import(/* webpackChunkName: "issue-paper" */ '@/views/IssuePaper.vue')
  },
  {
    path: '/resume',
    name: 'Resume',
    component: () => import(/* webpackChunkName: "resume" */ '@/views/Resume.vue')
  },
  {
    path: '/major-paper',
    name: 'MajorPaper',
    component: () => import(/* webpackChunkName: "major-paper" */ '@/views/MajorPaper.vue')
  },
  {
    path: '/courses',
    name: 'Courses',
    component: () => import(/* webpackChunkName: "courses" */ '@/views/Courses.vue')
  },
  {
    path: '/advising',
    name: 'Advising',
    component: () => import(/* webpackChunkName: "advising" */ '@/views/Advising.vue')
  },
  {
    path: '/other-work',
    name: 'OtherWork',
    component: () => import(/* webpackChunkName: "other-work" */ '@/views/OtherWork.vue')
  },
  {
    path: '/accessibility',
    name: 'Accessibility',
    component: () => import(/* webpackChunkName: "accessibility" */ '@/views/Accessibility.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
