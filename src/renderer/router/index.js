import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: require('@/views/home').default
    }
    // {
    //   path: '/workspace',
    //   name: 'workspace',
    //   component: require('@/views/workspace').default
    // },
    // {
    //   path: '/gist',
    //   name: 'gist',
    //   component: require('@/views/gist').default
    // },
    // {
    //   path: '/picture',
    //   name: 'picture',
    //   component: require('@/views/picture').default
    // },
    // {
    //   path: '/category',
    //   name: 'category',
    //   component: require('@/views/category').default
    // },
    // {
    //   path: '/tag',
    //   name: 'tag',
    //   component: require('@/views/tag').default
    // },
    // {
    //   path: '/todos',
    //   name: 'todos',
    //   component: require('@/views/todos').default
    // }
    // {
    //   path: '*',
    //   redirect: '/'
    // }
  ]
})
