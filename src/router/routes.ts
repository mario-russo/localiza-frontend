import Home from '../views/Home.vue'
import Tombamento from '../views/Tombamento.vue'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/tombamentos',
        name: 'Tombamento',
        component: Tombamento
    }

]
export default routes