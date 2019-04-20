import Vue from 'vue'
import Router from 'vue-router'
import HelloVue from '@/components/HelloVue'
import On from '@/components/on'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloVue',
      component: HelloVue
    },
    {
      path: '/on',
      name: 'On',
      component: On
    }
  ]
})
