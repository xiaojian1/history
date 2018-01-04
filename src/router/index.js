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
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: HelloWorld
    },
    {
      path: '/service',
      name: 'Service',
      component: Service
    },
    {
      path: '/case',
      name: 'Case',
      component: Case,
      children: [
        {
          path: ':caseNum',
          component: CaseOne
        }
      ]
    }
  ]
})
