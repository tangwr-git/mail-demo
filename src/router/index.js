import {
  createRouter,
  createWebHistory
} from 'vue-router'
const Cart = () => import('../components/views/cart/Cart')
const Category = () => import('../components/views/category/Category')
const Home = () => import('../components/views/home/Home')
const Profile = () => import('../components/views/profile/Profile')

const originalReplace = createRouter.prototype.replace
createRouter.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err)
}

const routes = [{
  path: '',
  redirect: '/Home'
}, {
  name: 'Cart',
  path: '/Cart',
  component: Cart
}, {
  name: 'Category',
  path: '/Category',
  component: Category
}, {
  name: 'Home',
  path: '/Home',
  component: Home
}, {
  name: 'Profile',
  path: '/Profile',
  component: Profile
}]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
