import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import Issue from '@/components/Issue'
import Login from '@/auth/Login'
import Signin from '@/auth/Signin'
import IssueList from '@/views/IssueList'

Vue.use(Resource)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/login',
      name:'Login',
      component: Login
    },
    {
      path:'/signin',
      name:'Signin',
      component: Signin
    },
    {
      path:'/',
      name:'IssueList',
      component: IssueList
    },
    {
      path:'/issue/:id',
      name:'Issue',
      component: Issue
    }

  ]
})
