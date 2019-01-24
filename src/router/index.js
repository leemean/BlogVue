import Vue from 'vue'
import Router from 'vue-router'

const home = () => import('@/home')

Vue.use(Router)

export const routes = [

    {
        name: 'home',
        path: '/',
        component: home,
        children:[
            {
                path: '/',
                component: r => require.ensure([], () => r(require('@/page/index')), 'index')
            },
            {
                path: '/log',
                component: r => require.ensure([], () => r(require('@/page/log')), 'log')
            }
        ]
    }
]

export default new Router({
    // mode: 'history',
    routes: routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})