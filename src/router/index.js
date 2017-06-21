import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const createView = relativePath => () => System.import('@src/views/' + relativePath)

export default () => new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/', component: createView('Home') },
    { path: '/posts', component: createView('Posts') },
    { path: '/about', component: createView('About') }
  ]
})
