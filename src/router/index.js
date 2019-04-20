import Vue from 'vue'
import Router from 'vue-router'
import HelloVue from '@/components/HelloVue'
import On from '@/components/on'
import Model from '@/components/model'

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
    },
    {
      path: '/model',
      name: 'Model',
      component: Model
    }
  ]
})
