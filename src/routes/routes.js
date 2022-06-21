import SignIn from '@/pages/SignIn';
import { createWebHistory, createRouter } from 'vue-router';

const routes = [
    {
        path: '/signin',
        name: 'SignIn',
        component: SignIn
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;