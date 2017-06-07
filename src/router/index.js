import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import Issue from '@/views/Issue'
import Login from '@/views/Login'
import Signin from '@/views/Signin'
import IssueList from '@/views/IssueList'
import UserList from '@/views/UserList'
import Home from '@/views/Home'
import AddIssue from '@/views/AddIssue'

Vue.use(Resource)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'Home',
      component: Home
    },
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
      path:'/issueList',
      name:'IssueList',
      component: IssueList
    },
    {
      path:'/issue/:id',
      name:'Issue',
      component: Issue
    },
    {
      path:'/userList',
      name:'UserList',
      component: UserList
    },
    {
      path:'/addIssue',
      name:'AddIssue',
      component: AddIssue
    }

  ]
})
