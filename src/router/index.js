import { createWebHistory, createRouter} from 'vue-router'
import TheHome from '../views/TheHome'
import TheProfile from '../views/TheProfile'
import TheClock from '../views/TheClock'
import TheLogin from '../views/TheLogin'

const routes = [
    {
        path:'/',
        name: 'home',
        meta: {layout: 'main'},
        component: TheHome,
    },
    {
        path: '/profile',
        name: 'profile',
        meta: {layout: 'main'},
        component: TheProfile,
    },
    {
        path: '/clock',
        name: 'clock',
        meta: {layout: 'main'},
        component: TheClock,
    },
    {
        path: '/login',
        name: 'login',
        meta: {layout: 'empty'},
        component: TheLogin
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router