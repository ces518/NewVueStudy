import Vue from 'vue'
import Router from 'vue-router'
import HelloVue from '@/components/HelloVue'
import On from '@/components/on'
import Model from '@/components/model'
import Template from '@/components/template'
import Computed from '@/components/computed'
import Class from '@/components/class'
import Style from '@/components/style'
import For from '@/components/for'

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
    },
    {
      path: '/class',
      name: 'Class',
      component: Class
    },
    {
      path: '/style',
      name: 'Style',
      component: Style
    },
    {
      path: '/for',
      name: 'For',
      component: For
    }
  ]
})
