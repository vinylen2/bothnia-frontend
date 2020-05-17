import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../components/Home.vue'
import SearchPage from '../components/SearchPage.vue'
import Profile from '../components/Profile/Profile.vue'
import ImagePage from '../components/Image/ImagePage.vue'
import ImageInfo from '../components/Image/ImageInfo.vue'

Vue.use(VueRouter)

  const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/',
    name: 'SearchPage',
    component: SearchPage
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/imagepage/:id',
    name: 'image-page',
    component: ImagePage
  },
  {
    path: '/imageinfo',
    name: 'image-info',
    component: ImageInfo
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
