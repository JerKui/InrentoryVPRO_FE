import LoginPage from '@/pages/LoginPage';
import RegisterPage from '@/pages/RegisterPage';
import DashboardPage from '@/pages/DashboardPage';
import CustomerPage from '@/pages/CustomerPage';
import ProductPage from '@/pages/ProductPage';
import CompanyPage from '@/pages/CompanyPage';
import EmailConfirmed from '@/pages/EmailConfirmed';
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
      path: '/orders',
      name: 'CustomerPage',
      component: CustomerPage
    },
    {
      path: '/companies',
      name: 'CompanyPage',
      component: CompanyPage
    },
    {
      path: '/inventory',
      name: 'ProductPage',
      component: ProductPage
    },
    {
      path: '/confirm',
      name: 'EmailConfirmed',
      component: EmailConfirmed
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