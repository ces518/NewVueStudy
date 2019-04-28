import Vue from 'vue'
import Router from 'vue-router'
import HelloVue from '@/components/HelloVue'
import On from '@/components/on'
import Model from '@/components/model'
import Template from '@/components/template'
import Computed from '@/components/computed'

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
    },
    {
      path: '/template',
      name: 'Template',
      component: Template
    },
    {
      path: '/computed',
      name: 'Computed',
      component: Computed
    }
  ]
})
