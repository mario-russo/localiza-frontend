import Home from '../views/Home.vue'



const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/tombamentos/:estado?',
        name: 'Tombamento',
        component: ()=> import ('../views/Tombamento.vue')
    }

]
export default routes