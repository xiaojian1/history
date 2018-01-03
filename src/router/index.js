import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Service from '@/components/Service'
import Case from '@/components/Case'
import CaseOne from '@/components/CaseOne'
import CaseTwo from '@/components/CaseTwo'
import CaseThree from '@/components/CaseThree'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/static/',
      name: 'home',
      component: HelloWorld
    },
    {
      path: '/static/service',
      name: 'Service',
      component: Service
    },
    {
      path: '/static/case',
      name: 'Case',
      component: Case,
      children: [
        {
          path: 'case1',
          component: CaseOne
        },
        {
          path: 'case2',
          component: CaseTwo
        },
        {
          path: 'case3',
          component: CaseThree
        }
      ]
    }
  ]
})
