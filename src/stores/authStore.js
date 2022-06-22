import axios from '../axios-common'
import router from '../routes/routes'
import { defineStore } from 'pinia';

export const useAuthStore = defineStore({
    id: 'authStore',
    state: () => ({
      user: JSON.parse(localStorage.getItem('user')),
      returnUrl: null
    }),
    actions: {
      async login(email, password) {
        const user = await axios.post('/login', { email, password });
  
        if(!user.ok) {
          router.push('/signin')
        }
  
        this.user = user;
  
        localStorage.setItem('user', JSON.stringify(user));
  
        router.push('/');
      },
      logout() {
        this.user = null;
        localStorage.removeItem('user');
        router.push('/signin');
      }
    },
    getters: {
      firstName: (state) => state.user.data.firstName
    }
  })