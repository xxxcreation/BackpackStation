import Vue from 'vue'
import Router from 'vue-router'
import Listsearch from '@/components/Listsearch'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Listsearch',
      component: Listsearch
    }
  ]
})
