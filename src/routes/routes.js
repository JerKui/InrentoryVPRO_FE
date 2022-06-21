import SignIn from '@/pages/SignIn';
import RegisterNow from '@/pages/RegisterNow';
import { createWebHistory, createRouter } from 'vue-router';

const routes = [
    {
        path: '/signin',
        name: 'SignIn',
        component: SignIn
    },
    {
        path: '/registernow',
        name: 'RegisterNow',
        component: RegisterNow
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;