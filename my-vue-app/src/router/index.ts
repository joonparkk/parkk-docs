import { createRouter, createWebHistory } from 'vue-router'
import LogEntries from '../views/LogEntries.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path:'/',
        name:'home',
        component: LogEntries,
    },
    {
        path:'/about',
        name: 'about',
        component: AboutView,
    }
  ]
})

export default router
