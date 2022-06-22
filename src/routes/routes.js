import LogIn from '@/pages/SignIn';
import RegisterNow from '@/pages/RegisterNow';
import DashBoard from '@/pages/DashBoard';
import { useAuthStore } from '@/stores/authStore'
import { createWebHistory, createRouter } from 'vue-router';

const routes = [
    {
        path: '/login',
        name: 'LogIn',
        component: LogIn
    },
    {
        path: '/registernow',
        name: 'RegisterNow',
        component: RegisterNow
    },
    {
        path: '/',
        name: 'DashBoard',
        component: DashBoard
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to) => {
    const publicPages = ['/login', '/register', '/success', '/404'];
    const authRequired = !publicPages.includes(to.path);
    const auth = useAuthStore();
  
    if (authRequired && !auth.user) {
      auth.returnUrl = to.fullPath;
      return '/login';
    } else if (!authRequired && auth.user) {
      auth.returnUrl = to.fullPath;
      return '/'
    }
  });

export default router;