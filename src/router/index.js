import { createWebHistory, createRouter} from 'vue-router'
import TheHome from '../views/TheHome'
import TheProfile from '../views/TheProfile'
import TheClock from '../views/TheClock'

const routes = [
    {
        path:'/',
        name: 'home',
        component: TheHome,
    },
    {
        path: '/profile',
        name: 'profile',
        component: TheProfile,
    },
    {
        path: '/clock',
        name: 'clock',
        component: TheClock,
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router