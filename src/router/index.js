import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import About from '@/components/About';
import Why from '@/components/Why';
import Contact from '@/components/Contact';
import OtherStuff from '@/components/OtherStuff';
import ViewProfile from '@/components/ViewProfile';
import Comments from '@/components/Comments';
import UserStories from '@/components/UserStories';
import NotFound from '@/components/NotFound';


Vue.use(Router)

export default new Router({
  mode: 'history', //This will allow the # symbol from the url to be moved
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
      path: '/other-stuff',
      name: 'OtherStuff',
      component: OtherStuff
    },
    {
      path: '/profile/:user_id',
      name: 'ViewProfile',
      component: ViewProfile
    },
    {
      path: '/comments/:comment_id',
      name: 'Comments',
      component: Comments
    },
    {
      path: '/user-stories/:story_id',
      name: 'UserStories',
      component: UserStories
    },
    {
      path: '/*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
