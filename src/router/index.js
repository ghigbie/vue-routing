import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import About from '@/components/About';
import Why from '@/components/Why';
import Contact from '@/components/Contact';
import ViewProfile from '@/components/ViewProfile';
import NotFound from '@/components/NotFound';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/why',
      name: 'Why',
      component: Why
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/profile/:user_id',
      name: 'ViewProfile',
      component: ViewProfile
    },
    {
      path: '*',
      name: 'Not Found',
      component: NotFound
    }
  ]
})
