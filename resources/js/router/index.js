import Vue    from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Login       from '~/pages/app/Login.vue'
import Home       from '~/pages/home/index.vue'
import Banco      from '~/pages/banco/BancoList.vue'
import BancoForm  from '~/pages/banco/BancoForm.vue'

import NoFound    from '~/pages/app/error/404.vue'

//router.addRoutes(routes: Array<RouteConfig>)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
        path: '/home',
        name: 'home',
        icon: 'bubble_chart',
        component: Home,
    },
    {
        path: '/banco',
        name: 'banco',
        icon: 'bubble_chart',
        component: Banco,
        children:
        [
            {
                path: 'form',
                name: 'bancoForm',
                component: BancoForm
            }
        ]
        
    },
    {
      path: '/*',
      name: 'NoFound',
      component: NoFound,
    },
  /*,
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import(/* webpackChunkName: "about"  './pages/About.vue')
    }*/
  ]
})








/*import Vue from 'vue'
import Router from 'vue-router'

import _e1b5ab98 from '../pages/banco/index.vue'
import _223c966d from'../pages/inspire.vue'
import _7d2d9452 from'../pages/banco/form.vue'
import _060e59b6 from'../pages/index.vue'

Vue.use(Router)
/*
if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export default {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
   // scrollBehavior,

    routes: [{
      path: "/banco",
      component: _e1b5ab98,
      name: "banco"
    }, {
      path: "/inspire",
      component: _223c966d,
      name: "inspire"
    }, {
      path: "/banco/form",
      component: _7d2d9452,
      name: "banco-form"
    }, {
      path: "/",
      component: _060e59b6,
      name: "index"
    }],

    fallback: false
  })
}
*/