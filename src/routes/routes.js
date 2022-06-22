import LoginPage from '@/pages/LoginPage';
import RegisterPage from '@/pages/RegisterPage';
import DashboardPage from '@/pages/DashboardPage';
import MenuPage from '@/components/MenuPage';
import { useAuthStore } from '@/stores/authStore'
import { createWebHistory, createRouter } from 'vue-router';

const routes = [
    {
        path: '/login',
        name: 'LoginPage',
        component: LoginPage
    },
    {
        path: '/register',
        name: 'RegisterPage',
        component: RegisterPage
    },
    {
        path: '/',
        name: 'DashboardPage',
        component: DashboardPage
    },
    {
      path: '/menupage',
      name: 'MenuPage',
      component: MenuPage
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