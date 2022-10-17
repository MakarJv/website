import { createWebHistory, createRouter} from 'vue-router'
import TheHome from '../views/TheHome'

const routes = [
    {
        path:'/',
        name: 'home',
        component: TheHome,
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router